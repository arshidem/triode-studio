import { useState, useEffect } from "react";

/**
 * Solves a system of linear equations using Gaussian elimination.
 */
function solveSystem(A, B) {
  const n = B.length;
  for (let i = 0; i < n; i++) {
    // Search for maximum in this column
    let maxEl = Math.abs(A[i][i]);
    let maxRow = i;
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(A[k][i]) > maxEl) {
        maxEl = Math.abs(A[k][i]);
        maxRow = k;
      }
    }

    // Swap maximum row with current row
    for (let k = i; k < n; k++) {
      const tmp = A[maxRow][k];
      A[maxRow][k] = A[i][k];
      A[i][k] = tmp;
    }
    const tmp = B[maxRow];
    B[maxRow] = B[i];
    B[i] = tmp;

    // Make all rows below this one 0 in current column
    for (let k = i + 1; k < n; k++) {
      const c = -A[k][i] / A[i][i];
      for (let j = i; j < n; j++) {
        if (i === j) {
          A[k][j] = 0;
        } else {
          A[k][j] += c * A[i][j];
        }
      }
      B[k] += c * B[i];
    }
  }

  // Solve equation Ax=B for an upper triangular matrix A
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    x[i] = B[i] / A[i][i];
    for (let k = i - 1; k >= 0; k--) {
      B[k] -= A[k][i] * x[i];
    }
  }
  return x;
}

/**
 * Calculates the 3D homography matrix mapping a rectangle (0,0) to (w,h)
 * to four arbitrary quad corners.
 */
function getPerspectiveTransform(src, dst) {
  const A = [];
  const B = [];

  for (let i = 0; i < 4; i++) {
    const sx = src[i][0];
    const sy = src[i][1];
    const dx = dst[i][0];
    const dy = dst[i][1];

    A.push([sx, sy, 1, 0, 0, 0, -sx * dx, -sy * dx]);
    A.push([0, 0, 0, sx, sy, 1, -sx * dy, -sy * dy]);
    B.push(dx);
    B.push(dy);
  }

  const h = solveSystem(A, B);
  
  // Matrix coefficients mapping:
  // h00=h[0], h01=h[1], h02=h[2]
  // h10=h[3], h11=h[4], h12=h[5]
  // h20=h[6], h21=h[7], h22=1
  return [
    h[0], h[3], 0, h[6],
    h[1], h[4], 0, h[7],
    0,    0,    1, 0,
    h[2], h[5], 0, 1
  ];
}

export function usePerspectiveWarp(ref, corners) {
  const [transform, setTransform] = useState("none");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateWarp = () => {
      const rect = element.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w === 0 || h === 0) return;

      // Source rectangle corners (unit coords or px coords of the image to warp)
      // Usually, the source image is 100% width and 100% height of its container,
      // but to map it exactly, we map (0,0) -> (w,0) -> (w,h) -> (0,h)
      const src = [
        [0, 0],
        [w, 0],
        [w, h],
        [0, h]
      ];

      // Destination coordinates in pixels
      const dst = [
        [corners.tl[0] * w, corners.tl[1] * h],
        [corners.tr[0] * w, corners.tr[1] * h],
        [corners.br[0] * w, corners.br[1] * h],
        [corners.bl[0] * w, corners.bl[1] * h]
      ];

      const m = getPerspectiveTransform(src, dst);
      const matrixStr = `matrix3d(${m.map(v => v.toFixed(6)).join(",")})`;
      setTransform(matrixStr);
    };

    updateWarp();

    const resizeObserver = new ResizeObserver(() => {
      updateWarp();
    });
    resizeObserver.observe(element);

    window.addEventListener("resize", updateWarp);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWarp);
    };
  }, [ref, corners]);

  return transform;
}

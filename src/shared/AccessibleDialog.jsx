import { useEffect, useRef, useId, useState, useCallback } from "react";
export default function AccessibleDialog({
  id,
  title,
  onClose,
  children,
  className = "",
  open = true,
  exitClassName = "",
}) {
  const ref = useRef(null);
  const titleId = useId();
  const [closing, setClosing] = useState(false);
  const previousFocus = useRef(null);
  const previousOverflow = useRef(null);
  const finishClose = useCallback(() => {
    ref.current?.close();
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
    if (previousFocus.current?.isConnected) previousFocus.current.focus();
    previousFocus.current = null;
    setClosing(false);
  }, []);
  useEffect(() => {
    const dialog = ref.current;
    let timer;
    if (open) {
      setClosing(false);
      if (!dialog.open) {
        previousFocus.current = document.activeElement;
        previousOverflow.current = document.body.style.overflow;
        dialog.showModal();
        document.body.style.overflow = "hidden";
      }
    } else if (dialog.open) {
      if (
        exitClassName &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setClosing(true);
        timer = window.setTimeout(finishClose, 320);
      } else finishClose();
    }
    return () => window.clearTimeout(timer);
  }, [open, exitClassName, finishClose]);
  useEffect(
    () => () => {
      ref.current?.close();
      if (previousOverflow.current !== null)
        document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
      if (previousFocus.current?.isConnected) previousFocus.current.focus();
      previousFocus.current = null;
    },
    [],
  );
  return (
    <dialog
      ref={ref}
      id={id}
      className={`site-dialog ${className} ${closing ? exitClassName + " dialog-closing" : ""}`}
      aria-labelledby={titleId}
      onAnimationEnd={(event) => {
        if (closing && event.target === ref.current) finishClose();
      }}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
    >
      <div className="dialog-content">
        <div className="dialog-header">
          <h2 id={titleId}>{title}</h2>
          <button
            type="button"
            className="dialog-close"
            onClick={onClose}
            aria-label="Close dialog"
            autoFocus
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}

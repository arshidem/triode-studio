import React, { useEffect, useState } from 'react';
import speedInsights from '@vercel/speed-insights';

function Performance() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    async function getSpeedReport() {
      const result = await speedInsights('https://your-deployed-site.vercel.app');
      setReport(result);
      console.log(result);
    }
    getSpeedReport();
  }, []);

  return (
    <div>
      <h1>Vercel Speed Insights</h1>
      {report ? <pre>{JSON.stringify(report, null, 2)}</pre> : <p>Loading report...</p>}
    </div>
  );
}

export default Performance;

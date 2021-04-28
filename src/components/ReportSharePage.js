import React, { useEffect, useState } from "react";
import ReportsService from "../services/reports-api-service";
import randomColor from "randomcolor";

function ReportSharePage(props) {
  const [report, setReport] = useState([]);
  const [color, setColor] = useState([`rgb(180, 135, 221)`]);
  let style = `linear-gradient(
    134deg,
    ${color} 50%,
    rgb(255, 255, 255) 50%
  )`;

  function colorClick() {
    setColor(randomColor());
  }

  useEffect(() => {
    const id = props.match.params.rep_id;
    ReportsService.shareReport(id).then((res) => {
      setReport(res);
    });
  }, []);

  const card = report.map((report, i) => {
    return (
      <div
        key={i}
        className="progressreport-share"
        style={{ background: style }}
        onClick={colorClick}
      >
        <h2 className="progress-titles">
          {new Date(report.date_created).toUTCString().slice(0, 16)}
        </h2>
        <h4 className="progress-titles">Letters & Words</h4>
        <p className="progress-values">{report.letters} Correct</p>
        <h4 className="progress-titles">Shapes & Colors</h4>
        <p className="progress-values">{report.colors} Correct</p>
        <h4 className="progress-titles">Things & Activities</h4>
        <p className="progress-values">{report.objects} Correct</p>
        <h4 className="progress-titles">Animals & Nature</h4>
        <p className="progress-values">{report.animals} Correct</p>
        <h4 className="progress-titles">Clothes & Body Parts</h4>
        <p className="progress-values">{report.clothes} %</p>
        <h4 className="progress-titles">Notes</h4>
        <p className="progress-values">{report.comments}</p>
      </div>
    );
  });

  return <div className="progress" data-testid="sharereport-div">{card}</div>;
}

export default ReportSharePage;

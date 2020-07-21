import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import ReportsService from "../services/reports-api-service";

function Progress(props) {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    ReportsService.getReports().then((res) => {
      setReports(res);
    });
  }, []);

  function signOutClick() {
    props.clearScore();
    TokenService.clearAuthToken();
  }
  function renderSignOut() {
    return (
      <div className="progress-text signout">
        <Link onClick={signOutClick} to="/">
          SIGN OUT
        </Link>
      </div>
    );
  }
  function noReports() {
    return (
      <div className="no-reports">
        Try out some activities and save your childs scores to see progress
        reports for the next time.
      </div>
    );
  }
  function deleteReport(id) {
    ReportsService.deleteReport(id).then((res) => {
      ReportsService.getReports().then((res2) => {
        setReports(res2);
      });
    });

    //console.log(id);
  }

  const cards = reports.reverse().map((report, i) => {
    return (
      <div key={i} className="progressreport">
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
        <div className="progress-badges">...</div>
        <button
          onClick={() => deleteReport(report.id)}
          className="report-delete"
        >
          DELETE
        </button>
      </div>
    );
  });

  return (
    <div className="progress">
      <h1 className="progress-text">
        {reports.length === 0
          ? noReports()
          : `${reports[0].child_name}'s Progress`}
      </h1>
      <section className="card-container">{cards}</section>
      {TokenService.hasAuthToken() ? renderSignOut() : ""}
    </div>
  );
}

export default Progress;

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import ReportsService from "../services/reports-api-service";

function Progress(props) {
  const [reports, setReports] = useState([]);
  let [scrollLeft, setScrollLeft] = useState(0);
  const progRef = useRef();

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
    if (
      window.confirm("Are you sure you want to delete this report?") === true
    ) {
      ReportsService.deleteReport(id).then((res) => {
        ReportsService.getReports().then((res2) => {
          setReports(res2);
        });
      });
    } else {
      return false;
    }
  }
  function shareReport(id) {
    props.history.push(`/share/${id}`);
  }

  const cards = reports.map((report, i) => {
    return (
      <div key={i} className="progressreport">
        <h2 className="progress-titles">
          {new Date(report.date_created).toUTCString().slice(0, 16)}
        </h2>
        <div className="progress-info">
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
        <div className="progress-btns">
          <button
            onClick={() => shareReport(report.id)}
            className="report-share"
          >
            SHARE
          </button>
          <button
            onClick={() => deleteReport(report.id)}
            className="report-delete"
          >
            DELETE
          </button>
        </div>
      </div>
    );
  });

  const handleScrollRight = () => {
    if (scrollLeft > progRef.current.scrollLeft) {
      setScrollLeft(progRef.current.scrollLeft);
    } else {
      setScrollLeft((scrollLeft += 200));
      progRef.current.scrollTo({
        top: 0,
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    setScrollLeft((scrollLeft -= 200));
    progRef.current.scrollTo({
      top: 0,
      left: scrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="progress">
      <h1 className="progress-text">
        {reports.length === 0
          ? noReports()
          : `${reports[0].child_name}'s Progress`}
      </h1>{" "}
      <button onClick={() => handleScrollLeft()} className="prog-scroll lefty">
        {"<"}
      </button>
      <button
        onClick={() => handleScrollRight()}
        className="prog-scroll righty"
      >
        {">"}
      </button>
      <section className="card-container" ref={progRef}>
        {cards.reverse()}
      </section>
      {TokenService.hasAuthToken() ? renderSignOut() : ""}
    </div>
  );
}

export default Progress;

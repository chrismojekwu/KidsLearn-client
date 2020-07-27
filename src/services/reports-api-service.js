import TokenService from "./token-service";
import config from "../config";

const ReportsService = {
  getReports() {
    return fetch(`${config.API_ENDPOINT}/reports`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getAllUsersReports(userId) {
    return fetch(`${config.API_ENDPOINT}/getAllReports`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    });
  },
  postReport(report) {
    return fetch(`${config.API_ENDPOINT}/reports`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(report),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteReport(id) {
    return fetch(`${config.API_ENDPOINT}/reports/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : true
    );
  },
  shareReport(id) {
    return fetch(`${config.API_ENDPOINT}/reports/share/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },
};

export default ReportsService;

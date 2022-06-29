export const API_WEB_DOC_BASE_URL = "https://api-doc-paylivre.herokuapp.com";
export const API_DOC_BASE_URL =
  process.env.REACT_APP_ENVIROMENT === "production"
    ? API_WEB_DOC_BASE_URL
    : "http://localhost:5000";

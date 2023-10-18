export const SLIDER_IMAGE_LOADER_OFFSET = 15;
export const WEBSITE_SHARE_IMAGE_URL = "https://i.ibb.co/mRnpdpz/main-logo.jpg";

// SET VALUE TO FALSE TO MAKE REAL API CALLS
export const isDevelopmentMode = process.env.NODE_ENV === "development";
// export const isDevelopmentMode = false;

const base = "http://18.198.89.176:50940";

//both redux and components
export const API_URL_BASE = isDevelopmentMode
  ? base + "/api/Search"
  : "/api/Search";
export const QUERY_LOG = isDevelopmentMode
  ? base + "/api/QueryLog"
  : "/api/QueryLog";

//only redux
export const SPELLING_API_URL_BASE = isDevelopmentMode
  ? base + "/api/spelling"
  : "/api/spelling";
export const CONTEXTUAL_GRAPH_BASE_URL = isDevelopmentMode
  ? base + "/api/contextualgraph"
  : "/api/contextualgraph";

//only components
export const QUERY_API_BASE_URL = isDevelopmentMode
  ? base + "/api/Query"
  : "/api/Query";
export const ALERT_BASE_URL = isDevelopmentMode
  ? base + "/api/Alert"
  : "/api/Alert";
export const FEEDBACK_BASE_URL = isDevelopmentMode
  ? base + "/api/Feedback"
  : "/api/Feedback";

// data for calendar
export const defaultRanges = {
  LAST_24_HOURS: {
    range: "LAST_24_HOURS",
    value: 1,
    text: "Last 24 hours",
  },
  LAST_7_DAYS: {
    range: "LAST_7_DAYS",
    value: 7,
    text: "Last 7 days",
  },
  LAST_30_DAYS: {
    range: "LAST_30_DAYS",
    value: 30,
    text: "Last 30 days",
  },
  LASY_6_MONTHS: {
    range: "LASY_6_MONTHS",
    value: 6,
    text: "Last 6 months",
  },
  LAST_1_YEAR: {
    range: "LAST_1_YEAR",
    value: 1,
    text: "Last 1 year",
  },
  LAST_3_YEARS: {
    range: "LAST_3_YEARS",
    value: 3,
    text: "Last 3 years",
  },
  LAST_10_YEARS: {
    range: "LAST_10_YEARS",
    value: 10,
    text: "Last 10 years",
  },
};

export const valueForBlur = "00000";

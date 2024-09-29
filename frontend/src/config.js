// config.js
const config = {
  development: {
    apiUrl: "http://127.0.0.1:8000",
  },
  production: {
    apiUrl: "https://troygalicia-server-2315b02bc656.herokuapp.com",
  },
};

export default config[process.env.NODE_ENV];

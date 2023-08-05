export const appConfig: {
  NODE_ENV: string;
  REACT_APP_WEB_APPLICATION_DOMAIN: string;
  REACT_APP_SERVER_APPLICATION_PATH: string;
} = (() => {
  const config = Object.assign({
    NODE_ENV: process.env.NODE_ENV,
    REACT_APP_WEB_APPLICATION_DOMAIN: process.env.REACT_APP_WEB_APPLICATION_DOMAIN,
    REACT_APP_SERVER_APPLICATION_PATH: process.env.REACT_APP_SERVER_APPLICATION_PATH,
  });

  return config;
})();

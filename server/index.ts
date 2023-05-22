// #region Global Imports
import next from 'next';
import express from 'express';
import path from 'path';
import _ from 'underscore';
// import { createProxyMiddleware } from 'http-proxy-middleware';
// #endregion Global Imports

// #region Local Imports
import routes from './routes';
// #endregion Local Imports

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();
const routeHandler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  const port = parseInt(process.env.PORT || '3000', 10);

  app.setAssetPrefix(process.env.STATIC_PATH || '');
  server.use(express.static(path.join(__dirname, '../public')));

  // if (process.env.PROXY_MODE === 'local') {
  //   // eslint-disable-next-line global-require
  //   const devProxy = require('./proxy');
  //   // Creating proxies with the middleware
  //   Object.keys(devProxy?.default).forEach(basePath => {
  //     server.use(basePath, createProxyMiddleware(basePath, devProxy.default?.[basePath]));
  //   });
  // }

  // Health API for readiness and liveness probe
  server.get(`${process.env.PREFIX}/health`, (req, res) => {
    res.send({ status: 200 });
  });

  server.use(routeHandler);
  server.all('*', (req, res) => handler(req, res));

  server.listen(port);

  // eslint-disable-next-line no-console
  console.log(
    `>>> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV} \n`
  );

  process.on('uncaughtException', err => {
    console.log('[ERROR]:', `Uncaught Exception : ${err} \n`);
  });
  process.on('beforeExit', code => {
    console.log('[INFO]:', `SERVER IS EXITING WITH CODE : ${code} \n`);
  });
  process.on('exit', err => {
    console.log('[INFO]:', `SERVER EXITED WITH ERRORs : ${err} \n`);
  });
});

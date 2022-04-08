const { https } = require('firebase-functions');
const { default: next } = require('next');

const isDevMode = process.env.NODE_ENV !== 'production';

const server = next({
  dev: isDevMode,
  conf: { distDir: '.next' },
});

const nextjsHandler = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
  return server.prepare().then(() => {
    return nextjsHandler(req, res);
  });
});

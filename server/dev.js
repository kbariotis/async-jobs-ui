const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./../webpack.config');
const startServerAPI = require('./../server/api');
const startWSServer = require('./../server/sockets');

startServerAPI()
  .then(startWSServer.connect)
  .then(() => {

    const devPort = 8080;

    const server = new WebpackDevServer(webpack(config), {
      publicPath: 'http://localhost:' + devPort + '/',
      contentBase: './app',
      hot: true,
      noInfo: true
    });

    server.listen(devPort, 'localhost', (err) => {
      if (err) {
        console.log(err); // eslint-disable-line no-console
      }

      console.log('Webpack listening at', devPort); // eslint-disable-line no-console
    });

  });

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');

const Hapi = require('hapi');

const apiServer = new Hapi.Server();
apiServer.connection({ port: 3000, routes: { cors: true } });

apiServer.route({
    method: 'GET',
    path: '/tasks',
    handler: function (request, reply) {
        reply([
          {
            id: 1,
            label: 'Something',
            percent: 70
          },
          {
            id: 2,
            label: 'Something Else',
            percent: 20
          }
        ]);
    }
});

var io = require('socket.io')(apiServer.listener);

io.set('origins', 'http://localhost:8080');

io.on('connection', (socket) => {
  console.log('a user connected');

  setInterval(() => {
    console.log('added');
    socket.emit('ADD_TASK', JSON.stringify({
      label: 'Another newly created Task',
      percent: 70
    }));
  }, 5000);
});

apiServer.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', apiServer.info.uri);
});

const server = new WebpackDevServer(webpack(config), {
    publicPath: 'http://localhost:8080/',
    contentBase: './app',
    hot: true,
    noInfo: true
});

server.listen(8080, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:8080');
});

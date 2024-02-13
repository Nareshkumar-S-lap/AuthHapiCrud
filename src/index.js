const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const routes = require('./modules/routes/enquiryRoutes');
const UserHandler = require('./middlewares/Authvalidator');
require('dotenv').config();
const mongodbURI = process.env.MONGODB_URI; 
const PORT = process.env.PORT;
const init = async () => {
  const server = Hapi.server({
    port: PORT , // Change this to your desired port
    host: 'localhost',
  });

  // Connect to MongoDB database
  await mongoose.connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  });
  console.log('Connected to MongoDB');

  // Register authentication strategies
  await server.register(require('@hapi/basic'));

  // Set up authentication strategy for admin
  server.auth.strategy('admin', 'basic', {
    validate: UserHandler.validateAdmin
  });

  // Set up authentication strategy for user
  server.auth.strategy('user', 'basic', {
    validate: UserHandler.validateUser
  });

  // Register routes
  server.route(routes);

  // Start the server
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();

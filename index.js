const server = require('./api/server.js');
require('dotenv').config()
// dotenv when requires gives us an obj back with a method on it called config
// by default, config will look for the .env file, load it, and creat enviroment variables basedon the .env file
// this allows other people in different environments to control what the port would be


const port = process.env.PORT ? process.env.Port : 4000
// make this configurable using environment variables
// get the port number into the environment where it can be changed based on the different environments
// this is done through a node obj called process that has a property called env

server.listen(port , () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});


// because the .env file could contain sensitive information, we need to add it to the gitignore file
const express = require("express");
const projectRouter = require('./projects/projectRouter.js');
const resourceRouter = require('./resources/resourceRouter.js');
const taskRouter = require('./tasks/taskRouter.js');
const server = express();

server.use(express.json());
server.use('/project', projectRouter);
server.use('/resource', resourceRouter);
server.use('/task', taskRouter);


server.get("/", (req, res) => {
    res.send("API");
});

module.exports = server;
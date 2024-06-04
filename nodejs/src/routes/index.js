const { Router } = require('express');

const usersRouter = require('./users.routes');
const notesRouter = require('./notes.routes');

const routers = Router();

routers.use('/users', usersRouter);
routers.use('/notes', notesRouter);

module.exports = routers;
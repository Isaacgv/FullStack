const { Router } = require('express');

const usersRouter = require('./users.routes');
const notesRouter = require('./notes.routes');
const tagsRouter = require('./tags.routes');

const routers = Router();

routers.use('/users', usersRouter);
routers.use('/notes', notesRouter);
routers.use('/tags', tagsRouter);

module.exports = routers;
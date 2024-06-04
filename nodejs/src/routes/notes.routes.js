const { Router } = require('express');

const NotesController = require('../controllers/NotesController');

const notesRouter = Router();

const notesController = new NotesController();

notesRouter.post('/:user_id', myMiddleware, notesController.create);


module.exports = notesRouter;
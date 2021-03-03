const Router = require('express').Router()
const CommentController = require('../controllers/CommentController')

Router.post('/', CommentController.createComment)

Router.get('/get', CommentController.getComment)

Router.delete('/delete', CommentController.deleteComment)

module.exports = Router

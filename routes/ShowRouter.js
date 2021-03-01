const Router = require('express').Router()
const ShowController = require('../controllers/ShowController')
const Show = require('../models/show')

//routes go here

Router.post('/', ShowController.createShow)
Router.get('/', ShowController.getShows)
Router.get('/:id', ShowController.getShowById)
Router.post('/:id/suit', ShowController.createSuit)

module.exports = Router

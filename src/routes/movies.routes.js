const express = require('express')
const router = express.Router()

const controller = require('../controllers/moviesController')


router.get('/', controller.allMovies)
router.get('/:id', controller.idMovie)
router.post('/', controller.createMovie)
router.patch('/:id', controller.updateMovie)
router.delete('/:id', controller.deleteMovie)

module.exports = router




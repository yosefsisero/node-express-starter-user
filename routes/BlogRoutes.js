const express = require('express');
const router = express.Router();

const { BlogController } = require('../controllers');
const { BlogValidator } = require('../validators')
const { verifyToken } = require('../middlewares')

router.get('/blogs', BlogController.findAll)
router.get('/blogs/:id', BlogController.findOne)

router.post('/blogs', verifyToken, BlogValidator.create, BlogController.create)

router.patch('/blogs/:id', verifyToken, BlogValidator.change, BlogController.change)

router.delete('/blogs/:id', verifyToken, BlogController.delete)

module.exports = router;
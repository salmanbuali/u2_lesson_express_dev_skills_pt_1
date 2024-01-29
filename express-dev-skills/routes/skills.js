var express = require('express')
const router = express.Router()
const skillsCtrl = require('../controllers/skills')
/* GET skills listing. */
router.get('/', skillsCtrl.index)

router.get('/:id', skillsCtrl.show)
module.exports = router

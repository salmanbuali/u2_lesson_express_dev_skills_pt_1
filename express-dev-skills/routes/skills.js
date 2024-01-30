var express = require('express')
const router = express.Router()
const skillsCtrl = require('../controllers/skills')
/* GET skills listing. */
router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.newSkill)

router.get('/:id', skillsCtrl.show)

router.post('/', skillsCtrl.create)

router.delete('/:id', skillsCtrl.deleteSkill)

router.get('/:id/edit', skillsCtrl.edit)

router.put('/:id', skillsCtrl.updateSkill)

module.exports = router

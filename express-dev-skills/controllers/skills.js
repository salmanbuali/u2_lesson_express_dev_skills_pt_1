const Skill = require('../models/skill')
const title = 'Skills'

const index = (req, res) => {
  const skills = Skill.getAll()
  res.render('skills/index', {
    skills,
    title
  })
}
const show = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  res.render('skills/show', { skill })
}

module.exports = { index, show }

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

const newSkill = (req, res) => {
  res.render('skills/new')
}

const create = (req, res) => {
  Skill.create(req.body)
  res.redirect('/skills')
}

const deleteSkill = (req, res) => {
  Skill.deleteOne(req.params.id)
  res.redirect('/skills')
}

const edit = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  res.render('skills/edit', { skill })
}

const updateSkill = (req, res) => {
  let skillId = req.params.id
  let updatedSkill = req.body.name
  Skill.updateOne(skillId, updatedSkill)
  res.redirect('/skills');
}
module.exports = { index, show, newSkill, create, deleteSkill,edit,updateSkill }

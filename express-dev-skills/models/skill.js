const skills = [
  { id: 1, name: 'HTML', desc: 'Learned in University and GA' },
  { id: 2, name: 'Javascript', desc: 'Learned in University and GA' },
  { id: 3, name: 'CSS', desc: 'Learned in University and GA' },
  { id: 4, name: 'Express', desc: 'Learned in GA' }
]

const getAll = () => {
  return skills
}

const getOne = (id) => {
  let skill = skills.find((skill) => {
    return skill.id === parseInt(id)
  })
  return skill
}

const create = (skill) => {
  skill.id = Date.now() % 1000000
  skills.push(skill)
}

const deleteOne = (id) => {
  const index = skills.findIndex((skill) => {
    return skill.id === parseInt(id)
  })
  skills.splice(index, 1)
}

const updateOne = (id, updateSkill) => {
  const skillToUpdate = skills.find((skill)=> {
    return skill.id === parseInt(id)
  })
  skillToUpdate.name = updateSkill
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne
}

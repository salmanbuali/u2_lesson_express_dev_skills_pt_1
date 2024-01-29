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
module.exports = {
  getAll,
  getOne
}

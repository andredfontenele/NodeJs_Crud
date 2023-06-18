const express = require('express')

const server = express()

server.use(express.json())

const cursos = ['ADS', 'SI', 'Arquitetura']

// Retorna um curso
server.get('/cursos/:index', (req, res) => {
  const { index } = req.params

  return res.json(cursos[index])
})

// Retorna todos os cursos
server.get('/cursos', (req, res) => {
  return res.json(cursos)
})

// Cria um novo curso
server.post('/cursos', (req, res) => {
  const { name } = req.body
  cursos.push(name)

  return res.json(cursos)
})

// Atualiza um curso curso
server.put('/cursos/:index', (req, res) => {
  const { index } = req.params
  const { name } = req.body

  cursos[index] = name

  return res.json(cursos)
})

// Delete a curso
server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params

  cursos.splice(index, 1)
  return res.json({ message: 'The curso has been deleted.' })
})

server.listen(3000)
console.log('listening on port 3000')

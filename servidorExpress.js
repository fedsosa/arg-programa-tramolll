const express = require('express')
const app = express()
const PORT= 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/usuarios', (req, res) => {
  res.send('lista de usuarios')
})



app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto  ${PORT}`)
})

const express = require('express')
const app = express()
const port = 9800

app.get('/login',(req,res)=>{
  res.sendFile(__dirname+"/src/HomePage.html")
})

app.listen(port, ()=>{
  console.log(`listening on port: ${port}`)
})

app.get('/User', (req,res)=>{
  console.log(req.query)
  res.send(req.query)
})

app.use(express.static(`${__dirname}/src`))//安全上的考慮


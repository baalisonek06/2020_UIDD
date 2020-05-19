const express = require('express')
const app = express()
const port = 9800

app.get('/page',(req,res)=>{
  res.sendFile(__dirname+"/new_ShoppingPage.html")
})

app.get('/map',(req,res)=>{
  res.sendFile(__dirname+"/map.html")
})


app.listen(port, ()=>{
  console.log(`listening on port: ${port}`)
})

app.get('/User', (req,res)=>{
  console.log(req.query)
  res.send(req.query)
})

app.use(express.static(`${__dirname}`))//安全上的考慮

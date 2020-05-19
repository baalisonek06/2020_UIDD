const express = require('express')
const app = express()
const port = 1477

app.get('/page',(req,res)=>{
  res.sendFile(__dirname+"/new_ShoppingPage.html")
})

app.get('/map',(req,res)=>{
  res.sendFile(__dirname+"/map.html")
})

app.get('/example',(req,res)=>{
  res.sendFile(__dirname+"/map_example.html")
})


app.listen(port, ()=>{
  console.log(`listening on port: ${port}`)
})

app.get('/User', (req,res)=>{
  console.log(req.query)
  res.send(req.query)
})

app.use(express.static(`${__dirname}`))//安全上的考慮

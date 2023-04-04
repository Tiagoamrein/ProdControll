require("express-async-errors")
const express = require("express")
const AppError = require("./utils/AppError")
const bodyParser = require("body-parser")
const app = express()
const port = 3334

app.use(express.json()) 
app.use(bodyParser.json());

app.use((error, request, response, next) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json ({
      status: "error",
      message: error.message
    })

  }
  console.log(error)
  return response.status(500).json({
    status: "error",
    message: "Casa caiu"
  })
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/machine', (req, res)=>{
  const {id , name}= req.body
  
  console.log("o id é", id)
  console.log("o name é", name)
  return res.status(201).json()
  
  
})


app.listen(port,() => {
  console.log(`Server rodando porta ${port}`)
})
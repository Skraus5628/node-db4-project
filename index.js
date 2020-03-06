const express = require("express")

const welcomeRouter = require('./welcome/welcomeRouter')

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())
server.use("/", welcomeRouter)

server.use((err, req, res, next) =>{
    console.log(err)
    res.status(500).json({
        message: "Something went horribly wrong..."
    })
})

server.listen(port, () =>{
    console.log(`Server listening on http://localhost:${port}`)
})
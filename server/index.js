const app = require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server, {cors: {origin: "http://localhost:5173"}})

const PORT = process.env.PORT || 3001

io.on('connection', socket => {
  console.log("Conectado: ", socket.id)
  socket.on('disconnect', reason=>{
    console.log(">>> Desconectado: ", socket.id)
  })

  io.emit('connected', "CONECTADO NO SERVIDOR")
})

server.listen(PORT, () => console.log(">>> Servidor rodando!"))
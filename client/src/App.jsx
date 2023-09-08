import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import io from "socket.io-client"

function App() {
  const [count, setCount] = useState(0)
  const [socket, setSocket] = useState(null)
  const [data, setData] = useState("desconectado")

  async function connect() {



    // const socket = await io.connect("http://localhost:3001")
    const socket = await io.connect("https://socketio-vercel-server.vercel.app/")



    setSocket(socket)
  }

  useEffect(()=>{
    if(socket) {
      socket.on("connected", data=>{
        setData(data)
      })
    }
  }, [socket])

  useEffect(()=>{
    
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{data}</h1>
      <div className="card">
        <button onClick={()=>connect()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

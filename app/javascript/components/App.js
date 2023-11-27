import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1>Hello World!!!</h1>
       <Link to="/api/greetings/random">Go to greeting</Link>
    </>
  )
}

export default App;
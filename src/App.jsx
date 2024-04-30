import React from 'react'
import './App.css'
import Home from "./components/Home"
import Quiz from "./components/Quiz"

function App() {
  const [atHome, setAtHome] = React.useState(true)

  function changePage() {
    setAtHome(prevPage => !prevPage)
  }

  return (
    <>
      {atHome && <Home changePage={changePage}/>}
      {!atHome && <Quiz changePage={changePage}/>}
    </>
  )
}

export default App

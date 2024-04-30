import React from 'react'
import './App.css'
import Home from "./components/Home"
import Quiz from "./components/Quiz"
import Question from "./components/Question"

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
// https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple

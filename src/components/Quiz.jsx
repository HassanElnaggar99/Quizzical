import React from "react"
import './Quiz.css'
import Question from './Question'

export default function Quiz(props) {
  const [questions, setQuestions] = React.useState([])
  const [isFinished, setIsFinished] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const userAnswers = []

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
    // fetch("/data.json")
      .then(resp => resp.json())
      .then(data => setQuestions(data?.results))
  }, [])

  function updateUserAnswers(event, index) {
      userAnswers[index] = event.target.textContent
  }

  const correctAnswers = questions.map(q => {
    const tmp = document.createElement("p")
    tmp.innerHTML = q.correct_answer
    return tmp.textContent
  })
  const questionElements = questions.map((item, i) => {
    return <Question
              key={i}
              {...item}
              updateUserAnswers={updateUserAnswers}
              index={i}
              isFinished={isFinished}
            />
  })

  function getResults() {
    setIsFinished(true)
    let ans = 0;
    for (let i = 0; i < userAnswers.length && i < correctAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i])
        ans++
    }
    setScore(ans)
  }

  return (
    <main className="quiz-page">
      {questionElements}
      {!isFinished &&
        <button onClick={getResults} className="quiz-page-getAnswers">
          Check answers
        </button>}
      {isFinished &&
        <div className="quiz-page-resultArea">
          <span className="quiz-page-result">You scored {score}/5 correct answers</span>
          <button className="quiz-page-playAgain" onClick={props.changePage}>Play again</button>
        </div>
      }
    </main>
  )
}

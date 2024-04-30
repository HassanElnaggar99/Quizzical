import React from "react"
import "./Question.css"

export default function Question(props) {
  const [answersElements, setAnswerElements] = React.useState()
  React.useEffect(() => {
    const answers = props.incorrect_answers.slice()
    let randomIndex = Math.floor(Math.random() * 4)
    answers.splice(randomIndex, 0, props.correct_answer)

    setAnswerElements(() => {
      return answers.map((a, i) => (
        <button
        key={i}
        className="question-btn"
        onClick={(e) => {props.updateUserAnswers(e, props.index)}}
        dangerouslySetInnerHTML={{ __html: a }} />
      ))
    })
  }, [])

  // console.log(props);
  return (
    <>
      <div className="question">
        <h2 className="question-title"
            dangerouslySetInnerHTML={{ __html: props.question }} />
        {answersElements}
      </div>
      <hr />
    </>
  )
}

/*
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "On a dartboard, what number is directly opposite No. 1?",
      "correct_answer": "19",
      "incorrect_answers": [
        "20",
        "12",
        "15"
      ]
    }

*/

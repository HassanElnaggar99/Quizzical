import React from "react"
import "./Question.css"

export default function Question(props) {
  const [answersElements, setAnswerElements] = React.useState()

  const id = React.useId()

  React.useEffect(() => {
    const answers = props.incorrect_answers.slice()
    let randomIndex = Math.floor(Math.random() * 4)
    answers.splice(randomIndex, 0, props.correct_answer)

    setAnswerElements(() => {
      return answers.map((a, i) => {
        return (
        <span key={i}>
          <input type="radio" id={`${id}-${i}`} name={`q-${props.index}`}/>
          <label
          htmlFor={`${id}-${i}`}
          className="question-btn"
          onClick={(e) => {
            props.updateUserAnswers(e, props.index);
            e.target.classList.add("selected")}}
          dangerouslySetInnerHTML={{ __html: a }} />
        </span>
        )
      })
    })
  }, [])


  React.useEffect(() => {
    if (props.isFinished) {
      const radios = document.getElementsByTagName("input")
      const labels = document.getElementsByTagName("label")

      const tmp = document.createElement("p")
      tmp.innerHTML = props.correct_answer

      let start = 4 * props.index
      for (let i = start; i < start + 4; i++) {
        if (labels[i].innerHTML === tmp.textContent)
          labels[i].classList.add("right")
        else if (radios[i].checked && labels[i].innerHTML !== tmp.textContent)
          labels[i].classList.add("wrong")
        else
          labels[i].classList.add("faded")
        radios[i].disabled = true
      }
    }
  }, [props.isFinished])

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

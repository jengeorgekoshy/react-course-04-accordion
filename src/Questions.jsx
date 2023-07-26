import Question from './Question'

const Questions = ({ questions, activeId, toggleId }) => {
  return (
    <>
      {questions.map((question) => {
        return (
          <Question
            {...question}
            activeId={activeId}
            toggleId={toggleId}
            key={question.id}
          />
        )
      })}
    </>
  )
}
export default Questions

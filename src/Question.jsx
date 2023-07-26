import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ id, title, info, activeId, toggleId }) => {
  const active = activeId === id
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleId(id)}>
          {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {active ? <p>{info}</p> : null}
    </article>
  )
}
export default Question

import { useState } from 'react'
import Questions from './Questions'
import questions from './data'

const App = () => {
  const [activeId, setActiveId] = useState(null)
  const toggleId = (id) => {
    const active = activeId === id ? null : id
    console.log(id)
    setActiveId(active)
  }
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        <Questions
          questions={questions}
          activeId={activeId}
          toggleId={toggleId}
        />
      </section>
    </main>
  )
}
export default App

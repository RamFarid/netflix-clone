import React from 'react'
import CreateAccountInput from '../../reusables/CreateAccountInput'
import QuestionsItem from '../../reusables/QuestionsItem'
import { faq } from '../../../data/faq.js'

import '../../../Styles/Landing/questions.css'
function Questions() {
  const [active, setActive] = React.useState(false)
  function handleActive(id) {
    if (active === id) {
      setActive(null)
    } else {
      setActive(id)
    }
  }
  return (
    <section className='lp-s faq'>
      <h2>Frequently Asked Questions</h2>
      <ul className='faq'>
        {faq.map(({ question, answer }, id) => {
          return (
            <QuestionsItem
              question={question}
              answer={answer}
              active={active}
              onClick={() => handleActive(id)}
              key={id}
              id={id}
            />
          )
        })}
      </ul>
      <div style={{ margin: '0 auto 50px auto', width: 'fit-content' }}>
        <CreateAccountInput id='emailT' />
      </div>
    </section>
  )
}

export default Questions

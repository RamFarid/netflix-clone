import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { TbArrowsCross } from 'react-icons/tb'

function QuestionsItem({ question, answer, active, id, onClick }) {
  return (
    <li className={active === id ? 'faq-item active' : 'faq-item'}>
      <span className='d-f' onClick={onClick}>
        {question}{' '}
        {active === id ? <TbArrowsCross /> : <AiOutlinePlus size='30' />}
      </span>
      <div className='answer'>{answer}</div>
    </li>
  )
}

export default QuestionsItem

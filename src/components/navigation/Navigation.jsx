import React from 'react'
import { days } from '../../utils/dateUtils.js'

import './navigation.scss'

const Navigation = ({ weekDates }) => {
  const today = new Date()

  return (
    <header className='calendar__header'>
      {weekDates.map((date, index) => (
        <div key={index} className='calendar__day-label day-label'>
          <span className='day-label__day-name'>{days[date.getDay()]}</span>
          <span
            className={`day-label__day-number ${
              date.toDateString() === today.toDateString() ? 'today' : ''
            }`}>
            {date.getDate()}
          </span>
        </div>
      ))}
    </header>
  )
}

export default Navigation

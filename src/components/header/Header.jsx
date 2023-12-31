import React from 'react'
import PropTypes from 'prop-types'

import { months, getWeekStartDate } from '../../utils/dateUtils'

import './header.scss'

const Header = ({
  weekStart,
  prevWeek,
  nextWeek,
  showCurrentWeek,
  currentMonth,
  showModalWindow,
}) => {
  const showMonth = () => {
    if (currentMonth === null) {
      return months[getWeekStartDate(weekStart).getMonth()]
    } else if (
      getWeekStartDate(weekStart).getMonth() < currentMonth ||
      currentMonth === 0
    ) {
      return (
        months[getWeekStartDate(weekStart).getMonth()] +
        ' - ' +
        months[currentMonth]
      )
    } else if (getWeekStartDate(weekStart).getMonth() > currentMonth) {
      return (
        months[currentMonth] +
        ' - ' +
        months[getWeekStartDate(weekStart).getMonth()]
      )
    }
  }

  return (
    <header className='header'>
      <button className='button create-event-btn' onClick={showModalWindow}>
        <i className='create-event-btn__icon'></i>Create
      </button>
      <div className='navigation'>
        <button
          className='navigation__today-btn button'
          onClick={showCurrentWeek}>
          Today
        </button>
        <button className='icon-button navigation__nav-icon' onClick={prevWeek}>
          <i className='fas fa-chevron-left'></i>
        </button>
        <button className='icon-button navigation__nav-icon' onClick={nextWeek}>
          <i className='fas fa-chevron-right'></i>
        </button>
        <span className='navigation__displayed-month'>{showMonth()}</span>
      </div>
    </header>
  )
}

Header.propTypes = {
  weekStart: PropTypes.instanceOf(Date).isRequired,
  prevWeek: PropTypes.func.isRequired,
  nextWeek: PropTypes.func.isRequired,
  showCurrentWeek: PropTypes.func.isRequired,
  currentMonth: PropTypes.number,
  showModalWindow: PropTypes.func.isRequired,
}

Header.defaultProps = {
  currentMonth: null,
}

export default Header

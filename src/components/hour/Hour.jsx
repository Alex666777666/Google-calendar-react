import React from 'react'
import PropTypes from 'prop-types'

import Event from '../event/Event'

import { formatMins } from '../../../src/utils/dateUtils.js'

const Hour = ({ dataHour, hourEvents, handleEventRemove }) => {
  return (
    <div className='calendar__time-slot' data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
          new Date(dateFrom).getMinutes()
        )}`
        const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
          new Date(dateTo).getMinutes()
        )}`

        const eventData = {
          id, // calculating event height = duration of event in minutes
          height:
            (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
            (1000 * 60),
          marginTop: new Date(dateFrom).getMinutes(),
          time: `${eventStart} - ${eventEnd}`,
          title,
        }

        return (
          <Event
            key={id}
            eventData={eventData}
            handleEventRemove={handleEventRemove}
          />
        )
      })}
    </div>
  )
}

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  handleEventRemove: PropTypes.func.isRequired,
}

export default Hour

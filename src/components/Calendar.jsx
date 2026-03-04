import { useState } from 'react'
import '../styles/Calendar.css'

function Calendar({ selectedDate, onDateChange }) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3)) // April 2025

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)
  const days = []

  // Empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  // Days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-nav" onClick={handlePrevMonth}>‹</button>
        <div className="calendar-month-year">
          <select value={monthNames[currentMonth.getMonth()]} onChange={() => {}}>
            {monthNames.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
          <select value={currentMonth.getFullYear()} onChange={() => {}}>
            {[2024, 2025, 2026].map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <button className="calendar-nav" onClick={handleNextMonth}>›</button>
      </div>

      <div className="calendar-weekdays">
        {dayNames.map((day) => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>

      <div className="calendar-days">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day === null ? 'empty' : ''} ${
              day === 13 ? 'today' : ''
            }`}
            onClick={() => day !== null && onDateChange(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar

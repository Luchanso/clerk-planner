import moment from 'moment';
import { useState } from 'react';

export function useCalendar(initDate = moment()) {
  const [date, setDate] = useState(initDate);

  function prevMonth() {
    setDate(date.clone().subtract(1, "months"));
  }

  function nextMonth() {
    setDate(date.clone().add(1, "months"));
  }

  return { nextMonth, prevMonth, date }
}
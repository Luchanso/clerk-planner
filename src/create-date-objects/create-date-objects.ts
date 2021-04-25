import moment, { Moment } from 'moment';

export const MONTH_TYPE = {
    prevMonth: 'prevMonth',
    currentMonth: 'currentMonth',
    nextMonth: 'nextMonth',
} as const;

export type MonthType = keyof typeof MONTH_TYPE;

export function createDateObjects(date: Moment, weekOffset = 0) {
  const startOfMonth = moment(date).startOf('month');

  let diff = startOfMonth.weekday() - weekOffset;
  if (diff < 0) diff += 7;

  const prevMonthDays = [];
  for (let i = 0; i < diff; i++) {
    prevMonthDays.push({
      day: startOfMonth.clone().subtract(diff - i, 'days'),
      type: MONTH_TYPE.prevMonth
    });
  }

  const currentMonthDays = [];
  for (let i = 1; i < date.daysInMonth() + 1; i++) {
    currentMonthDays.push({
      day: moment([date.year(), date.month(), i]),
      type: MONTH_TYPE.currentMonth
    });
  }

  const daysAdded = prevMonthDays.length + currentMonthDays.length - 1;

  const nextMonthDays = [];
  let i = 1;
  while ((daysAdded + i) % 7 !== 0) {
    nextMonthDays.push({
      day: currentMonthDays[currentMonthDays.length - 1].day
        .clone()
        .add(i, 'days'),
        type: MONTH_TYPE.nextMonth
    });

    i = i + 1;
  }

  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
}
import { format, isWithinInterval, endOfMonth, startOfMonth, getDay, addDays } from 'date-fns'
import { nanoid } from 'nanoid';

export const getCalendarMonthlyData = (date: Date): calendarDate[] => {
  console.log(`CalendarMontlyData date input > ${date}`);
  const monthStartDay = startOfMonth(date);
  const monthEndDay = endOfMonth(date);
  console.log(getDay(monthStartDay), getDay(monthEndDay));
  console.log(monthStartDay);
  const startDate = addDays(monthStartDay, -getDay(monthStartDay));
  const endDate = addDays(monthEndDay, (6 - getDay(monthEndDay)));

  let cursorDate = startDate;
  const calendarData: calendarDate[] = [];
  
  do {
    calendarData.push(
      {
        id: nanoid(),
        date: cursorDate,
        month: format(cursorDate, 'MMM'),
        year: format(cursorDate, 'yyyy'),
        muted: !isWithinInterval(cursorDate, {
          start: monthStartDay, 
          end: monthEndDay
        })
      }
    )
    cursorDate = addDays(cursorDate, 1);
  } while (isWithinInterval(cursorDate, {
    start: startDate,
    end: endDate
  }));

  return calendarData;
} 
import { getCalendarMonthlyData } from "@/lib/calendarUtils";
import { SchedulerActionKind } from "../SchedulerReducer";
import { format, parse } from "date-fns";
import { useSchedulerContext } from "../SchedulerContext";

const weeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function DayView() {
  const { state, dispatch } = useSchedulerContext();
  const calendarMonthlyData = getCalendarMonthlyData(state.date);
  console.log('day view rendered');

  return (
    <div className='grid grid-cols-7 justify-center items-center'>
      {
        weeks.map((week, i) => (
          <div
            key={`calendar-date-week-${week}-${i}`}
            className={`flex justify-center items-center p-1 hover:bg-zinc-200text-zinc-200'}`}>
            {week}
          </div>
        ))
      }

      {
        calendarMonthlyData.map(date => (
          <div
            key={`calendar-date-${date.id}`}
            className={`flex justify-center items-center h-10 w-10 p-1 hover:bg-zinc-200 ${date.muted ? 'text-zinc-200' : 'cursor-pointer'}`}
            onClick={() => {
              if (date.muted) return;
              const day = format(date.date, 'dd');
              const selectedDate = parse(day, 'd', date.date);
              dispatch({
                type: SchedulerActionKind.UPDATE_DATE, payload: {
                  date: selectedDate,
                  isPopoverOpen: false
                }
              })
            }}
          >
            <span>{format(date.date, 'dd')}</span>
          </div>
        ))
      }
    </div>
  )
}

export default DayView
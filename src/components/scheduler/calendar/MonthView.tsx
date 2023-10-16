import { CALENDAR_VIEW, SchedulerActionKind } from "../SchedulerReducer";
import { useSchedulerContext } from "../SchedulerContext";

import { format, parse } from "date-fns";

type MonthViewProps = {
  months: string[]
};

function MonthView({ months }: MonthViewProps) {
  const { state: schedulerState, dispatch } = useSchedulerContext();
  const selectedMonth = format(schedulerState.date, 'MMM');

  return (
    <div className='grid grid-cols-4 justify-center items-center gap-3'>
      {
        months.map((month, i) => (
          <div
            key={`month-${month}`}
            className={`flex justify-center items-center rounded-full h-14 w-14 p-1 cursor-pointer
              ${month === selectedMonth ? 'bg-fuchsia-600 text-white' : 'bg-white hover:bg-zinc-200'}`}
            onClick={() => {
              //const selecmonth = format(schedulerState.date, 'dd');
              const selectedDate = parse(`${i + 1}`, 'M', schedulerState.date);
              dispatch({
                type: SchedulerActionKind.CHANGE_CALENDAR_MODE, payload: {
                  calendarMode: CALENDAR_VIEW.DAYS,
                  date: selectedDate
                }
              })
            }}
          >
            <span>{month}</span>
          </div>
        ))
      }
    </div>
  )
}

export default MonthView;
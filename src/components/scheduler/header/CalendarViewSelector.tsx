import { format } from 'date-fns';
import { ChevronRight, ChevronLeft } from "lucide-react"

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CALENDAR_VIEW, SchedulerActionKind } from '../SchedulerReducer';
import MonthView from '../calendar/MonthView';
import DayView from '../calendar/DayView';
import { useSchedulerContext } from '../SchedulerContext';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const CalendarViewSelector = () => {

  const { state: schedulerState, dispatch } = useSchedulerContext();
  const { date, isPopoverOpen, calendarMode } = schedulerState;
  const selectedYear = format(date, 'yyyy');
  const selectedMonth = format(date, 'MMM');

  const setPopoverTrigger = (isOpen: boolean) => {
    console.log(`setPopoverTrigger : ${isOpen}`);
    dispatch({ type: SchedulerActionKind.POPOVER_TRIGGER, payload: { isPopoverOpen: isOpen } })
  }

  return (
    <div className="border border-zinc-300  p-1 px-4 flex justify-between items-center">
      <div className="flex gap-1">
        <Button variant="outline" size="icon">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Popover open={isPopoverOpen} onOpenChange={setPopoverTrigger} >
          <PopoverTrigger className="text-xl text-zinc-600 font-normal border rounded-sm min-w-[12rem] hover:bg-zinc-100">
            {`${selectedMonth} ${selectedYear}`}
          </PopoverTrigger>
          <PopoverContent>
            <div className='flex gap-1 items-center justify-between'>
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button className='w-full' variant="outline" size="icon" onClick={() => {
                dispatch({
                  type: SchedulerActionKind.CHANGE_CALENDAR_MODE, payload: {
                    calendarMode: CALENDAR_VIEW.MONTHS
                  }
                })
              }}>
                {calendarMode == CALENDAR_VIEW.DAYS ? `${selectedMonth} ${selectedYear}` : `${selectedYear}`}
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <hr className='my-2'></hr>
            {isPopoverOpen &&
              loadCalendarView(calendarMode)
            }
          </PopoverContent>
        </Popover>

        <Button variant="outline" size="icon">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex gap-1 text-zinc-600 p-1">
        <Button className="h-7 bg-zinc-500 text-zinc-100" variant="secondary">
          <span>
            Today
          </span>
        </Button>
        <Button className="h-7" variant="outline">
          <span>
            Weekly
          </span>
        </Button>
        <Button className="h-7" variant="outline">
          <span>
            Monthly
          </span>
        </Button>
      </div>
    </div>
  )
}

const loadCalendarView = (calendarView: CALENDAR_VIEW) => {
  if (calendarView === CALENDAR_VIEW.MONTHS) {
    console.log("render calendar month view")
    return (<MonthView months={months} />)
  } else {
    console.log("render calendar day view")
    return <DayView />
  }
}

export default CalendarViewSelector
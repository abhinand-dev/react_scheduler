import { format } from 'date-fns'
import ScheduledTask from './ScheduledTask'

const DateMonthlyFormat = ({ calendarDate }: { calendarDate: calendarDate }) => {
  const task: Task = {
    id: 'acff_dgd',
    title: 'Standup meeting',
    start: new Date(),
    end: new Date(),
    allDay: false,
    daySpan: 1,
    recurring: false
  }

  return (
    <div className={`flex flex-col min-h-[120px] border border-zinc-200 p-1 cursor-pointer hover:bg-gray-100 hover:border-zinc-300 ${calendarDate.muted ? 'text-gray-300' : 'text-gray-900'}`}>
      <div className='flex'>
        {format(calendarDate.date, 'dd MMM')}
      </div>
      <div id='schedule-wrapper' className='flex flex-col gap-1 h-full items-start'>
        <ScheduledTask bgColor='bg-teal-400' task={task} />
      </div>
    </div>
  )
}

export default DateMonthlyFormat
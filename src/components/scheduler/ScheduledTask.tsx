import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

type ScheduledTaskProps = {
  bgColor: string,
  task: Task
}

const ScheduledTask = ({
  bgColor,
  task
}: ScheduledTaskProps) => {
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger className="w-full">
        <div className={`text-white text-xs flex gap-1 w-full p-1 rounded-sm ${bgColor}`}>
          <span className='text-xs whitespace-nowrap'>{`12.00 AM`}</span>
          <span className='overflow-hidden text-ellipsis whitespace-nowrap'>{task.title}</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent align="start" className="p-1">
        <div className={` text-xs gap-1 p-2 w-full rounded-sm bg-zinc-100`}>
          <div>Time: 12.00 AM</div>
          <div>Task: {task.title}</div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default ScheduledTask
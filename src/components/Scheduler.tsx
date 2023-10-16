import { SchedulerProvider } from "./scheduler/SchedulerContext";
import CalendarViewSelector from "./scheduler/header/CalendarViewSelector"
import MonthlyView from "./scheduler/monthView/MonthlyView"

const Scheduler = () => {
  return (
    <div className="border border-zinc-500 w-full min-h-[500px] min-w-[500px] p-4">
      <SchedulerProvider>
        <CalendarViewSelector />
        <div className="h-full">
          <MonthlyView />
        </div>
      </SchedulerProvider>
    </div>

  )
}

export default Scheduler
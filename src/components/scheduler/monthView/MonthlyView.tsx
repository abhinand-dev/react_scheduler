import { getCalendarMonthlyData } from "@/lib/calendarUtils";
import DateMonthlyFormat from "../DateMonthlyFormat";
import MonthlyHeaderItem from "./MonthlyHeaderItem";
import { useSchedulerContext } from "../SchedulerContext";

const MonthlyView = () => {
  const { state } = useSchedulerContext();
  const data = getCalendarMonthlyData(state.date);
  return (
    <div className="h-full">
      <div className="grid grid-cols-7 w-full bg-zinc-200 ">
        <MonthlyHeaderItem>Sun</MonthlyHeaderItem>
        <MonthlyHeaderItem>Mon</MonthlyHeaderItem>
        <MonthlyHeaderItem>Tue</MonthlyHeaderItem>
        <MonthlyHeaderItem>Wed</MonthlyHeaderItem>
        <MonthlyHeaderItem>Thu</MonthlyHeaderItem>
        <MonthlyHeaderItem>Fri</MonthlyHeaderItem>
        <MonthlyHeaderItem>Sat</MonthlyHeaderItem>
      </div>
      <div className="grid grid-cols-7 w-full h-full">
        {generateDayComponent(data)}
      </div>
    </div>
  )
}

const generateDayComponent = (data: calendarDate[]) => {
  return (
    data.map((date, index) => (
      <DateMonthlyFormat key={`monthlyView-${index}`} calendarDate={date} />
    ))
  )
}

export default MonthlyView;
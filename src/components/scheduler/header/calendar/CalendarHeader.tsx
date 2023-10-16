import { ChevronDown, ChevronUp } from "lucide-react"

import { Button } from '@/components/ui/button'

function CalendarHeader() {
  return (
    <div className='flex gap-3 selectedYearitems-center justify-between'>
      <Button className='w-full' variant="outline" size="icon">
        {}
      </Button>
      <div className='flex gap-1'>
        <Button variant="outline" size="icon">
          <ChevronDown className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <ChevronUp className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default CalendarHeader
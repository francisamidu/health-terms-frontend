import React from 'react'
import {
  Notification03Icon as BellIcon,
  Search01Icon as SearchIcon,
  Calendar02Icon as CalendarIcon,
  ArrowDown01Icon as ArrowDownIcon
} from 'hugeicons-react'

import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

const DashboardHeader: React.FC = () => {
  const [date, setDate] = React.useState<Date>()

  return (
    <>
      <div className="bg-white w-full border-b-2 border-gray-100 fixed top-0 left-0 pl-[270px] z-[5]">
        <div className="ml-2 p-3 flex flex-row items-center justify-between">
          <div className="relative w-3/5">
            <input
              type="text"
              placeholder="Search medical terms..."
              className="pl-10 pr-4 py-2 border w-4/5 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
          <div className="flex flex-row items-center justify-end mr-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'ghost'}
                  className={cn(
                    date
                      ? 'w-[200px] justify-start items-center text-left font-normal'
                      : 'w-fit justify-start items-center text-left font-normal text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Select date</span>}
                  <ArrowDownIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <BellIcon
              size={24}
              className="text-gray-600 hover:text-blue-500 mx-4 hover:cursor-pointer"
            />
            <img
              src="/avatar-male.svg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHeader

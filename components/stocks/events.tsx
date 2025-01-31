import type { Event } from '@/lib/types'
import { format, parseISO } from 'date-fns'

export function Events({ events }: { events: Event[] }) {
  return (
    <div className="-mt-2 flex w-full flex-col gap-2 py-4">
      {events.map(event => (
        <div
          key={event.date}
          className="flex shrink-0 flex-col gap-1 rounded-lg bg-white dark:bg-zinc-800  p-4"
        >
          <div className="text-sm text-zinc-400">
            {format(parseISO(event.date), 'dd LLL, yyyy')}
          </div>
          <div className="text-base font-bold text-zinc-700 dark:text-zinc-200">
            {event.headline}
          </div>
          <div className="text-zinc-500">
            {event.description.slice(0, 70)}...
          </div>
        </div>
      ))}
    </div>
  )
}

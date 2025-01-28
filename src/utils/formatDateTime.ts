import { format, parseISO, formatDistanceToNow } from 'date-fns'

export const formatDate = (
  date: Date | string,
  dateFormat: string = 'yyyy-MM-dd'
): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  return format(parsedDate, dateFormat)
}

export const formatDateTime = (
  date: Date | string,
  dateTimeFormat: string = 'yyyy-MM-dd HH:mm:ss'
): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  return format(parsedDate, dateTimeFormat)
}

export const formatTime = (
  date: Date | string,
  timeFormat: string = 'HH:mm:ss'
): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  return format(parsedDate, timeFormat)
}

export const timeAgo = (date: Date | string): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  return formatDistanceToNow(parsedDate, { addSuffix: true })
}

// New function for human-readable date formats
export const formatHumanReadableDate = (date: Date | string): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  return format(parsedDate, 'MMMM d, yyyy') // Example: January 20, 2025
}

// Additional formats can be added as needed
export const formatHumanReadableDateTime = (date: Date | string): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  return format(parsedDate, 'MMMM d, yyyy h:mm a') // Example: January 20, 2025 3:30 PM
}

import React from 'react'
import { ButtonProps } from '@/types'
import { Button } from '@/components/ui/button'

const AppButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  className = ''
}) => {
  return (
    <Button
      className={`bg-main-dark hover:bg-main-dark-variant focus:outline-none focus:ring-2 focus:ring-main-400 focus:ring-offset-2 focus:ring-offset-main-50 text-white h-11 px-6 rounded-xl w-full flex items-center justify-center gap-2 sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      <span>{text}</span>
      {icon && <>{icon}</>}
    </Button>
  )
}

export default AppButton

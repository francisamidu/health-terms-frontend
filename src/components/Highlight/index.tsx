import React from 'react'
import { HighlightProps } from 'types'

const Highlight: React.FC<HighlightProps> = ({
  className,
  title,
  icon,
  iconPosition = 'left'
}) => {
  return (
    <div
      className={`ml-3 text-xs leading-5 font-medium  dark:text-sky-400 bg-main-bluish rounded-full py-[0.35rem] px-4 hidden xl:flex items-center bg-opacity-20 ${className}`}
    >
      {icon && iconPosition == 'left' ? icon : null}
      <strong className="font-semibold ml-2">{title}</strong>
      {icon && iconPosition == 'right' ? icon : null}
    </div>
  )
}

export default Highlight

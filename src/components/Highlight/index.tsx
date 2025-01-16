import React from 'react'
import { HighlightProps } from 'types'

const Highlight: React.FC<HighlightProps> = ({ className, title }) => {
  return (
    <div
      className={`ml-3 text-xs leading-5 font-medium  dark:text-sky-400 bg-main-bluish rounded-full py-[0.35rem] px-4 hidden xl:flex items-center ${className}`}
    >
      <strong className="font-semibold ml-2">{title}</strong>
    </div>
  )
}

export default Highlight

import React from 'react'
import { HighlightProps } from 'types'

const Highlight: React.FC<HighlightProps> = ({
  className,
  title,
  subtitle
}) => {
  return (
    <div
      className={`ml-3 text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-sky-400/20 ${className}`}
    >
      <strong className="font-semibold">{title}</strong>
      <svg
        width="2"
        height="2"
        fill="currentColor"
        aria-hidden="true"
        className="ml-2 text-sky-600 dark:text-sky-400/70"
      >
        <circle cx="1" cy="1" r="1"></circle>
      </svg>
      <span className="ml-2">{subtitle}</span>
      <svg
        width="3"
        height="6"
        className="ml-3 overflow-visible text-sky-300 dark:text-sky-400"
        aria-hidden="true"
      >
        <path
          d="M0 0L3 3L0 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  )
}

export default Highlight

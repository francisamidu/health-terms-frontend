import React from 'react'
import { ButtonProps } from 'types'

const Button: React.FC<ButtonProps> = ({ text, href, className = '' }) => {
  return (
    <a
      className={`bg-main-dark hover:bg-main-dark-variant focus:outline-none focus:ring-2 focus:ring-main-400 focus:ring-offset-2 focus:ring-offset-main-50 text-white h-11 px-6 rounded-xl w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 transition-all duration-300 ${className}`}
      href={href}
    >
      {text}
    </a>
  )
}

export default Button

import { UserMultiple02Icon } from 'hugeicons-react'
import React from 'react'
import { HighlightProps } from 'types'

const Highlight: React.FC<HighlightProps> = ({
  className = '',
  title,
  icon
}) => {
  const _icon = () => {
    switch (icon) {
      case 'users':
        return <UserMultiple02Icon size={20} className="ml-2" />
      default:
        return null
    }
  }
  return (
    <div
      className={`ml-3 text-xs leading-5 font-medium  dark:text-sky-400 bg-main-bluish rounded-full py-[0.35rem] px-4 hidden xl:flex items-center bg-opacity-10 ${className}`}
    >
      {_icon()}
      <strong className="font-semibold ml-2">{title}</strong>
    </div>
  )
}

export default Highlight

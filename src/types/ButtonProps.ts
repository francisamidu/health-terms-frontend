export interface ButtonProps {
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  className?: string
}

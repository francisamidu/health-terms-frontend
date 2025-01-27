import React from 'react'
import { ButtonProps } from '@/types'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/types/ButtonProps'

const AppButton: React.FC<ButtonProps> = ({
  text,
  icon,
  iconPosition = 'right',
  className = '',
  variant,
  size,
  onClick,
  ...props
}) => {
  return (
    <Button
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition == 'left' ? <>{icon}</> : null}
      <span>{text}</span>
      {icon && iconPosition == 'right' ? <>{icon}</> : null}
    </Button>
  )
}

Button.displayName = 'Button'

export default AppButton

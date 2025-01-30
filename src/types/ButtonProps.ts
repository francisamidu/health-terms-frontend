import { cva, VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'focus:outline-none focus:ring-2 focus:ring-main-400 focus:ring-offset-2 focus:ring-offset-main-50 flex items-center justify-center gap-2 sm:w-auto transition-all duration-300 ',
  {
    variants: {
      variant: {
        default:
          'bg-main-dark hover:bg-main-dark-variant text-white dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 ',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          '!bg-white !text-main-dark border-[1px] border-main-dark hover:!text-white hover:!bg-main-bluish',
        subtle:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
        ghost:
          'bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent',
        form: "!w-full !rounded-sm !bg-blue-500 py-2 hover:bg-blue-600'"
      },
      size: {
        default: 'h-10 px-5 rounded-xl',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  className?: string
}

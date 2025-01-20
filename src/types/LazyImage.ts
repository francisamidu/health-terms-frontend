export type LazyLoadImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  alt: string
  src: string
  className?: string
  loadInitially?: boolean
  observerOptions?: IntersectionObserverInit
}

import { LazyLoadImageProps } from 'react-lazy-load-image-component'

export interface ImageProps extends LazyLoadImageProps {
  alt: string
  height: string | number
  src: string
  width: string | number
}

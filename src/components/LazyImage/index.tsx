import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ImageProps } from '@/types/LazyImage'
import 'react-lazy-load-image-component/src/effects/opacity.css'

const LazyImage: React.FC<ImageProps> = ({ alt, height, src, width }) => (
  <div>
    <LazyLoadImage alt={alt} height={height} src={src} width={width} />
  </div>
)

export default LazyImage

import React from 'react'
import { ImageProps } from '@/types/LazyImage'
import LazyLoad from 'react-lazy-load'

const LazyImage: React.FC<ImageProps> = ({ alt, height, src, width }) => (
  <LazyLoad height={height} width={width} threshold={0.95}>
    <img alt={alt} src={src} />
  </LazyLoad>
)

export default LazyImage

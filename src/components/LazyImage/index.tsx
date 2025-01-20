import { LazyLoadImageProps } from '@/types/LazyImage'
import React, { useRef, useState, useEffect, useCallback } from 'react'

const LazyLoadImage: React.FC<LazyLoadImageProps> = ({
  alt,
  src,
  className,
  loadInitially = false,
  observerOptions = { root: null, rootMargin: '200px 0px' },
  ...props
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(loadInitially)

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        observerRef.current?.disconnect()
        setIsLoaded(true)
      }
    },
    []
  )

  useEffect(() => {
    if (loadInitially) return

    if ('loading' in HTMLImageElement.prototype) {
      setIsLoaded(true)
      return
    }

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    )

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [loadInitially, observerCallback, observerOptions])

  return (
    <img
      alt={alt}
      src={isLoaded ? src : ''}
      ref={imgRef}
      className={className}
      loading={loadInitially ? undefined : 'lazy'}
      {...props}
    />
  )
}

export default LazyLoadImage

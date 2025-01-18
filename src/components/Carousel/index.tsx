import React from 'react'
import { CarouselProvider, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { CarouselProps } from '@/types/CarouselProps'

const Carousel: React.FC<CarouselProps> = ({ array, components }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={55}
      totalSlides={array.length}
    >
      {components}
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  )
}

export default Carousel

"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import img from "../../assets/carusel.jpg"
import img2 from "../../assets/iphone.jpg"
import img3 from "../../assets/iphone2.png"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[90%] h-[450px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem className="w-full h-[450px]">
          <img
            src={img}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </CarouselItem>
        <CarouselItem className="w-full h-[450px]">
          <img
            src={img2}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </CarouselItem>
        <CarouselItem className="w-full h-[450px]">
          <img
            src={img3}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

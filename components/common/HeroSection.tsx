'use client'

import Slide1 from '@/public/icons/Navbar/slide1.png'
import Slide2 from '@/public/icons/Navbar/slide2.png'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const images = [Slide1, Slide2]

const sliderData = [
  {
    id: 1,
    coloredText: "Weekend Discount",
    title: "Get the best quality products at the lowest prices",
    text: "We have prepared special discounts for you on organic breakfast products",
    buttonText: "Shop Now",
    discountedPrice: "$21.67",
    originalPrice: "$59.99",
    conclusion: "Don't miss this limited time offer"
  },
  {
    id: 2,
    coloredText: "Weekend Discount",
    title: "Shopping with us for better quality and the best price",
    text: "We have prepared special discount for you on grosery products. Don't miss these opportunities...",
    buttonText: "Shop Now",
    discountedPrice: "$21.67",
    originalPrice: "$26.67",
    conclusion: "Don't miss this limited time offer"
  }
]

const HeroSection = () => {
  const [[current, direction], setCurrent] = useState([0, 1])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const paginate = (dir: number) => {
    setCurrent(([prev]) => {
      const nextIndex = (prev + dir + images.length) % images.length
      return [nextIndex, dir]
    })
  }

  const startAutoSlide = () => {
    stopAutoSlide()
    intervalRef.current = setInterval(() => paginate(1), 4000)
  }

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide()
  }, [])

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '80%' : '-80%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-80%' : '80%',
      opacity: 0,
      zIndex: 0
    })
  }

  return (
    <section className="w-[80%] h-[560px] m-auto mt-[26px] rounded-xl relative overflow-hidden">
      <AnimatePresence custom={direction}>
        <motion.div
          key={current}
          className="absolute w-full h-full flex items-center"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: 'spring', stiffness: 50, damping: 20 }, opacity: { duration: 0.5 } }}
        >
          <Image
            src={images[current]}
            alt={`Slide ${current}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute w-1/2 ml-20  z-10">
            <span className=' bg-gradient-to-r from-[#4af789] from-0%  to-60% px-[10px] py-[7px] rounded-md text-black'>{sliderData[current].coloredText}</span>
            <h3 className='font-bold text-5xl text-[#39245F] leading-16 w-[92%]'>{sliderData[current].title}</h3>
            <p className='w-[85%] text-base text-[#030712]'>{sliderData[current].text}</p>
            <div className='mt-10 flex gap-4 items-center'>
              <Link
                href={""}
                className=' text-white bg-[#634C9F] rounded-lg py-3 px-[20px]'
              >
                {sliderData[current].buttonText}
              </Link>
              <div className='grid grid-cols-2 w-[fit] h-fit items-center'>
                <span className='col-span-1 text-[#DC2626] font-bold w-fit text-[28px]'>{sliderData[current].discountedPrice}</span>
                <span className='col-span-1 text-[#111827] w-fit line-through font-medium text-lg'>{sliderData[current].originalPrice}</span>
                <span className='col-span-2 text-[11px] text-[#a5a6a8]'>{sliderData[current].conclusion}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default HeroSection

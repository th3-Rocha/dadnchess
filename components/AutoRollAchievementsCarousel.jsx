'use client'

import React, { useEffect } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const achievements = [
  { 
    title: "Título de Mestre Nacional conquistado em 2020",
    image: "https://example.com/path-to-your-image-1.jpg"
  },
  { 
    title: "1º e 2º Lugar Jogos Universitários Absoluto 2022/2024",
    image: "images/2022jubsBrasilia.jpg"
  },
  { 
    title: "1º Lugar Estadual Absoluto RN 2021",
    image: "https://example.com/path-to-your-image-3.jpg"
  },
  { 
    title: "1º Lugar Norte-Nordeste Blitz 2022",
    image: "images/blitz.jpg"
  },
  { 
    title: "3º Lugar Camp. Brasileiro Absoluto Rápido 2023",
    image: "https://example.com/path-to-your-image-5.jpg"
  },
  { 
    title: "1º Lugar Jogos Escolares da Juventude do RN 2019",
    image: "https://example.com/path-to-your-image-6.jpg"
  },
]

export default function AutoRollAchievementsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 640px)': { slidesToScroll: 2 },
        '(min-width: 768px)': { slidesToScroll: 3 },
      }
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('pointerDown', () => {
        emblaApi.plugins().autoplay.stop()
      })
      emblaApi.on('pointerUp', () => {
        emblaApi.plugins().autoplay.play()
      })
    }
  }, [emblaApi])

  return (
    <section id="achievements" className="py-16 bg-gray-100">
      <div className="container max-w-max	">
        <h2 className="text-3xl font-bold mb-8 text-center">Conquistas</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] p-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      width={400}
                      height={300}
                      className="rounded-lg mb-4 w-full h-58 object-cover"
                    />
                    <p className="text-center text-sm font-medium flex-grow flex items-center justify-center">
                      {achievement.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
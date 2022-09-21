import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Slider.css'
const Slider = () => {
  const [activeSlider, setActiveSlider] = useState(1)

  const nextHandler = () => {
    if (activeSlider !== 5) {
      setActiveSlider(activeSlider + 1)
    } else if (activeSlider === 5) {
      setActiveSlider(1)
    }
  }

  const prevHandler = () => {
    if (activeSlider !== 1) {
      setActiveSlider(activeSlider - 1)
    } else if (activeSlider === 1) {
      setActiveSlider(5)
    }
  }
  setInterval(() => {
    if (activeSlider !== 5) {
      setActiveSlider(activeSlider + 1)
    } else if (activeSlider === 5) {
      setActiveSlider(1)
    }
  }, 3000)
  return (
    <div className="slider__wrapper">
      {Array.from({ length: 5 }).map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlider === index + 1 ? 'slide active-slide' : 'slide'
            }
          >
            <img
              src={`https://coffee.alexflipnote.dev/random?cache=${performance.now()}`}
              alt="slider"
            />
          </div>
        )
      })}

      <button onClick={prevHandler} className={'btn prev'}>
        prev
      </button>
      <button onClick={nextHandler} className={'btn next'}>
        next
      </button>
    </div>
  )
}

export default Slider

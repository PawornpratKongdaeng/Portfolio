import React from 'react'
import { BackgroundBeams } from '../ui/background-beams'
import { ThemeSwitchButton } from '../ui/theme-switch-button'
import { CoverDemo } from '../ui/text/textcover'

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-base-100 relative flex flex-col items-center justify-center antialiased">
      <div className="absolute top-4 right-4">
        <ThemeSwitchButton />
      </div>
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <CoverDemo />
          <p className="text-center mt-6 text-lg sm:text-xl text-base-content/70">
            Frontend Developer & UI/UX Designer
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
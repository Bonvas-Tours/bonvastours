import React from 'react'
import HeroSlider from './HeroSlider'
import SearchBar from './SearchBar'

function Hero() {
    return (
        <section className='relative md:h-[570px] h-[300px] px-0 sm:px-8 lg:px-10 max-w-7xl mx-auto md:mb-20 mb-36'>
            <HeroSlider />
            <div className='absolute md:-bottom-10 -bottom-24 left-1/2 transform -translate-x-1/2 z-10 w-full'>
                <SearchBar />
            </div>
        </section>
    )
}

export default Hero

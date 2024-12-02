import React from 'react'
import HeroSlider from './HeroSlider'
import SearchBar from './SearchBar'

function Hero() {
    return (
        <section className='relative h-screen px-0 sm:px-8 lg:px-10 max-w-7xl mx-auto'>
            <HeroSlider />
            <div className='absolute bottom-4 inset-x-0 md:inset-x-40 z-10 '>
                <SearchBar />
            </div>
        </section>
    )
}

export default Hero

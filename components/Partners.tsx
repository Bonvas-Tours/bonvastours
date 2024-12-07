"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const partners = [
    { src: "/partner/asu.png", alt: "Arizona State University Logo" },
    { src: "/partner/usaid.png", alt: "USAID Logo" },
    { src: "/partner/knust.png", alt: "Kwame Nkrumah University of Science and Technology Logo" },
]

function Partners() {
    const [currentPartners, setCurrentPartners] = useState(partners)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPartners((prev) => {
                const [first, ...rest] = prev
                return [...rest, first]
            })
        }, 3000) // Change partner every 3 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Trusted Partners</h1>
                <div className="flex items-center justify-center overflow-hidden">
                    <AnimatePresence>
                        {currentPartners.slice(0, 3).map((partner, index) => (
                            <motion.div
                                key={partner.src}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="mx-4"
                            >
                                <img
                                    src={partner.src}
                                    alt={partner.alt}
                                    className="w-full max-w-[150px] md:max-w-[200px]"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default Partners


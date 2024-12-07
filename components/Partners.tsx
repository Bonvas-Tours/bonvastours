"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { partners } from '@/content'
import Image from 'next/image'


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
                        {currentPartners?.slice(0, 5).map((partner, index) => (
                            <motion.div
                                key={partner.src || index} // Use index as fallback for unique keys
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="mx-2 flex-shrink-0 w-1/3 md:w-1/5"
                            >
                                <Image
                                    src={partner.src}
                                    alt={partner.alt || "Partner Logo"} // Fallback for alt text
                                    width={100} // Adjust width
                                    height={100} // Adjust height
                                    className="mx-auto max-w-[80px] md:max-w-[120px]" // Ensure it's responsive
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


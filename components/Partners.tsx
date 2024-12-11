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
                <div className="relative flex items-center justify-center overflow-hidden h-[100px]">
                    <AnimatePresence>
                        {currentPartners?.slice(0, 3).map((partner, index) => (
                            <motion.div
                                key={partner.src || index}
                                className="w-1/3 md:w-1/5 will-change-transform"
                            >
                                <Image
                                    src={partner.src}
                                    alt={partner.alt || "Partner Logo"}
                                    width={100}
                                    height={100}
                                    className="mx-auto object-contain max-h-[80px] md:max-h-[120px]"
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

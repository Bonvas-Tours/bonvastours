"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Import the Next.js Image component
import { partners as defaultPartners } from "@/content";

function Partners() {
    const [currentPartners, setCurrentPartners] = useState(defaultPartners);

    useEffect(() => {
        // Only run the interval if there are enough partners to cycle
        if (defaultPartners.length > 1) {
            const interval = setInterval(() => {
                setCurrentPartners((prev) => {
                    const [first, ...rest] = prev;
                    return [...rest, first]; // Rotate the array
                });
            }, 3000); // Change partner every 3 seconds

            return () => clearInterval(interval); // Cleanup interval on component unmount
        }
    }, []);

    return (
        <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-2xl font-bold mb-8 text-gray-800">
                    Trusted Partners
                </h1>
                <div className="flex items-center justify-center overflow-hidden">
                    <AnimatePresence>
                        {currentPartners?.slice(0, 5).map((partner, index) => (
                            <motion.div
                                key={partner.src || index} // Use index as fallback for unique keys
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="mx-4"
                            >
                                <Image
                                    src={partner.src}
                                    alt={partner.alt || "Partner Logo"} // Fallback for alt text
                                    width={200} // Specify width
                                    height={200} // Specify height
                                    className="w-full max-w-[150px] md:max-w-[200px]" // Optional additional styles
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

export default Partners;

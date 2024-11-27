"use client";

import { useState, useEffect } from "react";

interface AnimatedCounterProps {
    targetValue: number;
    duration: number; // in milliseconds
    label: string;
}

const AnimatedCounter = ({ targetValue, duration, label }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = 20; // update every 20ms
        const step = (targetValue * interval) / duration;

        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev + step >= targetValue) {
                    clearInterval(timer);
                    return targetValue;
                }
                return Math.min(prev + step, targetValue);
            });
        }, interval);

        return () => clearInterval(timer);
    }, [targetValue, duration]);

    return (
        <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold mb-2">{Math.round(count)}+</div>
            <p className="md:text-2xl font-medium">{label}</p>
        </div>
    );
};

export default AnimatedCounter;

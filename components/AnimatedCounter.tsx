"use client";

import { useState, useEffect } from "react";

interface AnimatedCounterProps {
    targetValue: number;
    duration: number;
    label: string;
}

const AnimatedCounter = ({ targetValue, duration, label }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const step = targetValue / (duration / 20); // Calculate step size
        let currentCount = 0;

        const timer = setInterval(() => {
            currentCount += step;
            if (currentCount >= targetValue) {
                clearInterval(timer);
                setCount(targetValue);
            } else {
                setCount(Math.min(currentCount, targetValue));
            }
        }, 20);

        return () => clearInterval(timer); // Cleanup
    }, [targetValue, duration]);

    return (
        <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold mb-2">
                {Math.round(count)}+
            </div>
            <p className="md:text-2xl font-medium">{label}</p>
        </div>
    );
};

export default AnimatedCounter;

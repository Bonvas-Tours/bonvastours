import React from "react";
import Image from "next/image";

interface AvatarProps {
    src: string;
    alt: string;
    size?: number;
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 80, className }) => {
    return (
        <div
            className={`rounded-full overflow-hidden flex justify-center items-center ${className}`}
            style={{ width: size, height: size }}
        >
            <Image
                src={src}
                alt={alt}
                width={size}
                height={size}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

            />
        </div>
    );
};

export default Avatar;

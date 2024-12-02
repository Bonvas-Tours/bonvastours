import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <Image
                src="/logo.png"
                alt="BonVas Tours Logo"
                width={40}
                height={40}
                className="mr-2 w-auto h-auto"
            />
        </Link>
    );
};

export default Logo;

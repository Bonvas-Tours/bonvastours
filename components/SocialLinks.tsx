import { socialIcons } from "@/content";

const SocialLinks = () => {
    return (
        <div className="ml-4 flex space-x-1 items-center md:ml-6">
            {socialIcons.map(({ Icon, href }, index) => (
                <a
                    key={index}
                    href={href}
                    className="w-6 h-6 bg-neutral-800 text-white rounded-full flex items-center justify-center hover:bg-primary p-1.5"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon className="w-full h-full" />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
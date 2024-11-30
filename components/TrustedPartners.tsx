import Image from 'next/image';

export default function TrustedPartners() {
    return (
        <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-gray-800">Trusted Partners</h2>
                <div className="flex items-center justify-center space-x-8">
                    <Image
                        src="/partner/asu.png"
                        alt="Arizona State University Logo"
                        width={200}
                        height={100}
                        className="w-full max-w-[150px] md:max-w-[200px]"
                    />
                    <Image
                        src="/partner/usaid.png"
                        alt="USAID Logo"
                        width={200}
                        height={100}
                        className="w-full max-w-[150px] md:max-w-[200px]"
                    />
                    <Image
                        src="/partner/knust.png"
                        alt="Kwame Nkrumah University of Science and Technology Logo"
                        width={200}
                        height={100}
                        className="w-full max-w-[150px] md:max-w-[200px]"
                    />
                </div>
            </div>
        </section>
    );
}


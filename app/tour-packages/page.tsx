import React, { Suspense } from 'react'
import { TourPackagesContent } from './_content'

function page() {
    return (
        <main className="min-h-screen bg-background">
            <div className="relative h-[300px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/slide2.jpg')",
                    }}
                />

            </div>
            <section className="section_container">
                <h1 className="text-4xl font-bold text-neutral-800">Tour Packages</h1>
                <Suspense fallback={<div className="container py-12">Loading...</div>}>
                    <TourPackagesContent />
                </Suspense>
            </section>
        </main>
    )
}

export default page

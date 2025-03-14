'use client'

import { SearchForm } from './SearchForm'
import { useState } from 'react'
import BookingForm from './BookingForm'
import { cn } from '@/lib/utils'

type TabType = "book" | "manage"

export default function SearchBar() {
    const [activeTab, setActiveTab] = useState<TabType>("book")

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="flex">
                <button
                    className={cn(
                        "px-8 py-4 text-center font-medium transition-colors",
                        activeTab === "book" ? "bg-white text-gray-800 border-b-2 border-orange-600"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200",
                    )}
                    onClick={() => setActiveTab("book")}
                >
                    Book a Tour Package
                </button>
                <button
                    className={cn(
                        "px-8 py-4 text-center font-medium transition-colors",
                        activeTab === "manage"
                            ? "bg-white text-gray-800 border-b-2 border-orange-600"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200",
                    )}
                    onClick={() => setActiveTab("manage")}
                >
                    Manage My Booking
                </button>
            </div>

            <div className="mx-auto w-full max-w-6xl px-4 bg-white ">
                {activeTab === "book" ? <SearchForm /> : <BookingForm />}
            </div>
        </div>
    )
}
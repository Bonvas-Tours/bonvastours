// This simulates fetching data from a JSON server

import { format } from "date-fns"

export type Tourist = {
    id: string
    firstname: string
    lastname: string
    primaryNumber: string
    secondaryNumber?: string
    country: string
    city: string
    address: string
    dob?: string
    specialRequirement?: string
    email?: string
}

export type Image = {
    id: number;
    alt?: string;
    src: string;
    tourPackageId: string;
    blurhash?: string;
    isMain?: boolean;
};

export type Location = {
    id: number
    region?: string
    country: string
    city?: string
    tourPackageId: string
    createdAt: string
    updatedAt: string
};

export type Coordinate = {
    id: number;
    longitude: string;
    latitude: string;
    tourPackageId: string;
    createdAt: string;
    updatedAt: string;
};

export type TourPackage = {
    id: string;
    name: string;
    description: string;
    category: string;
    type: string;
    slug: string;
    currency: string;
    cover: string;
    minimumPax: number;
    maximumPax: number;
    status: "Published" | "Review" | "Draft" | "Sold";
    dailyPrice?: number;
    rating?: number;
    averageReviews?: number;
    expiryDate: string;
    createdAt: string;
    updatedAt: string;
    gallery?: Image[];
    location?: Location;
    tourMap?: Coordinate[];
};

export type TourPackageOption = {
    id: string
    tourPackageId: string
    durationDays: number
    startDate: string
    endDate: string
    adultPrice: number
    couplePrice: number
    childrenPrice: number
}


export type Booking = {
    id: string
    tnr: string
    tourPackageId: string
    selectedOptionId?: string
    numberOfAdults: number
    numberOfChildren: number
    numberOfCouples: number
    totalPrice: number
    isInstallment: boolean
    installmentNumber?: number
    amountPaid: number
    status: "Reserved" | "Approved" |"Completed" | "Cancelled"
    dueDate?: string
    createdAt: string
    departurePoint?: string
    tourPackage?: TourPackage
    selectedOption?: TourPackageOption
    tourists?: Tourist[]
    payments?: Payment[]
}

export type Payment = {
    id: string
    bookingId: string
    amount: number
    installmentNumber?: number
    status: "paid" | "refunded"
    transactionId: string
    createdAt: string
}

export type Review = {
    id: string
    tourPackageId: string
    bookingId: string
    touristId: string
    rating: number
    comment: string
    createdAt: string
    tourPackage?: TourPackage
}

// Mock data
const mockTourists: Tourist[] = [
    {
        id: "t1",
        firstname: "Divine",
        lastname: "Kwatsenu",
        primaryNumber: "+233 4545 8434",
        country: "Ghana",
        city: "Accra",
        address: "Kumasi, Tech Junction",
        specialRequirement: "Guest requested extra pillows and towels. Ensure room service is available upon arrival.",
        email: "divinekwatsenu@gmail.com",
    },
    {
        id: "t2",
        firstname: "Alex",
        lastname: "Andrew",
        primaryNumber: "+233 1234 5678",
        country: "Ghana",
        city: "Kumasi",
        address: "Tech Junction",
    },
    {
        id: "t3",
        firstname: "Silas",
        lastname: "Kwaku Amonsang",
        primaryNumber: "+233 8765 4321",
        country: "Ghana",
        city: "Takoradi",
        address: "Main Street",
    },
]

const mockTourPackages: TourPackage[] = [
    {
        id: "tp1",
        name: "Royal Ade Festival Tour (RAFT)",
        description: "Experience the vibrant culture and rich history of the Royal Ade Festival in Takoradi.",
        category: "Private",
        type: "Local",
        slug: "royal-ade-festival-tour",
        currency: "GHS",
        cover: "/gallery/royal_ade_festival/1.jpg",
        minimumPax: 5,
        maximumPax: 30,
        status: "Published",
        expiryDate: "2025-07-01T23:59:59Z",
        createdAt: "2025-02-20T12:00:00Z",
        updatedAt: "2025-03-01T10:00:00Z"
    },
    {
        id: "tp2",
        name: "Zember Ghana",
        description: "A 7-day cultural and historical tour through Accra.",
        category: "Private",
        type: "Local",
        slug: "zember-ghana",
        currency: "USD",
        cover: "/gallery/royal_ade_festival/2.jpg",
        minimumPax: 2,
        maximumPax: 20,
        status: "Review",
        dailyPrice: 695,
        rating: 4.5,
        averageReviews: 85,
        expiryDate: "2025-09-01T23:59:59Z",
        createdAt: "2025-02-25T14:30:00Z",
        updatedAt: "2025-03-05T09:45:00Z"
    },
    {
        id: "tp3",
        name: "Panafest: A Journey Through the Heart of Ghana",
        description: "Discover Ghana’s deep cultural heritage through the Panafest festival.",
        category: "Public",
        type: "International",
        slug: "panafest-tour",
        currency: "USD",
        cover: "/gallery/royal_ade_festival/3.jpg",
        minimumPax: 10,
        maximumPax: 50,
        status: "Published",
        rating: 4.9,
        averageReviews: 200,
        expiryDate: "2025-08-15T23:59:59Z",
        createdAt: "2025-02-18T10:00:00Z",
        updatedAt: "2025-03-02T11:30:00Z"
    },
    {
        id: "tp4",
        name: "Safari Adventure in Mole National Park",
        description: "A thrilling wildlife experience at Ghana’s largest game reserve.",
        category: "Public",
        type: "Local",
        slug: "mole-safari-adventure",
        currency: "GHS",
        cover: "/gallery/mole_safari/1.jpg",
        minimumPax: 4,
        maximumPax: 25,
        status: "Draft",
        rating: 4.6,
        averageReviews: 95,
        expiryDate: "2025-12-01T23:59:59Z",
        createdAt: "2025-03-10T09:15:00Z",
        updatedAt: "2025-03-15T11:00:00Z"
    },
    {
        id: "tp5",
        name: "Volta Lake Cruise & Waterfalls",
        description: "Explore the serene Volta Lake and hike to breathtaking waterfalls.",
        category: "Public",
        type: "Local",
        slug: "volta-lake-cruise",
        currency: "USD",
        cover: "/gallery/volta_lake/1.jpg",
        minimumPax: 2,
        maximumPax: 15,
        status: "Sold",
        expiryDate: "2025-05-20T23:59:59Z",
        createdAt: "2025-01-15T08:30:00Z",
        updatedAt: "2025-03-01T14:20:00Z"
    }
];

const mockLocations: Location[] = [
    {
        id: 1,
        region: "West Africa",
        country: "Ghana",
        city: "Takoradi",
        tourPackageId: "tp1",
        createdAt: "2024-01-10T10:00:00Z",
        updatedAt: "2024-02-15T12:00:00Z",
    },
    {
        id: 2,
        region: "West Africa",
        country: "Ghana",
        tourPackageId: "tp2",
        createdAt: "2024-01-15T09:30:00Z",
        updatedAt: "2024-02-10T11:45:00Z",
    },
    {
        id: 3,
        region: "West Africa",
        country: "Ghana",
        tourPackageId: "tp3",
        createdAt: "2024-01-20T08:15:00Z",
        updatedAt: "2024-02-05T10:30:00Z",
    }
];

const mockTourPackageOptions: TourPackageOption[] = [
    {
        id: "tpo1",
        tourPackageId: "tp1",
        durationDays: 10,
        startDate: "2025-07-01",
        endDate: "2025-07-25",
        adultPrice: 3150,
        couplePrice: 6000,
        childrenPrice: 1500,
    },
    {
        id: "tpo2",
        tourPackageId: "tp1",
        durationDays: 7,
        startDate: "2025-07-01",
        endDate: "2025-07-07",
        adultPrice: 2335,
        couplePrice: 4500,
        childrenPrice: 1200,
    },
]

const mockBookings: Booking[] = [
    {
        id: "b1",
        tnr: "1AUT2R",
        tourPackageId: "tp1",
        selectedOptionId: "tpo1",
        numberOfAdults: 1,
        numberOfChildren: 2,
        numberOfCouples: 1,
        totalPrice: 7500,
        isInstallment: true,
        installmentNumber: 3,
        amountPaid: 3500,
        status: "Reserved",
        dueDate: "2025-07-15",
        createdAt: "2022-11-29T18:00:00Z",
        departurePoint: "Kotoka International Airport",
    },
    {
        id: "b2",
        tnr: "2BVT3S",
        tourPackageId: "tp2",
        selectedOptionId: "tpo2",
        numberOfAdults: 1,
        numberOfChildren: 0,
        numberOfCouples: 0,
        totalPrice: 2335,
        isInstallment: false,
        amountPaid: 2335,
        status: "Completed",
        createdAt: "2022-10-15T14:30:00Z",
        departurePoint: "Kumasi Airport",
    },
    {
        id: "b3",
        tnr: "2BVT3D",
        tourPackageId: "tp2",
        selectedOptionId: "tpo2",
        numberOfAdults: 1,
        numberOfChildren: 0,
        numberOfCouples: 0,
        totalPrice: 2335,
        isInstallment: false,
        amountPaid: 2335,
        status: "Approved",
        createdAt: "2022-10-15T14:30:00Z",
        departurePoint: "Kumasi Airport",
    },
]

const mockPayments: Payment[] = [
    {
        id: "p1",
        bookingId: "b1",
        amount: 1000,
        installmentNumber: 1,
        status: "paid",
        transactionId: "43298295842",
        createdAt: "2025-07-20T18:00:00Z",
    },
    {
        id: "p2",
        bookingId: "b1",
        amount: 2000,
        installmentNumber: 2,
        status: "paid",
        transactionId: "43298295843",
        createdAt: "2025-07-25T10:30:00Z",
    },
    {
        id: "p3",
        bookingId: "b1",
        amount: 500,
        installmentNumber: 3,
        status: "paid",
        transactionId: "43298295844",
        createdAt: "2025-07-30T14:45:00Z",
    },
]

const mockReviews: Review[] = [
    {
        id: "r1",
        tourPackageId: "tp1",
        bookingId: "b2",
        touristId: "t1",
        rating: 5,
        comment:
            "Amazing experience! The tour guides were knowledgeable and friendly. The accommodations were top-notch and the food was delicious. I would highly recommend this tour to anyone looking to explore Ghana.",
        createdAt: "2023-06-15T09:30:00Z",
    },
    {
        id: "r2",
        tourPackageId: "tp2",
        bookingId: "b1",
        touristId: "t2",
        rating: 4,
        comment:
            "Great tour overall. The cultural experiences were incredible and the guides were excellent. The only downside was the long travel times between locations, but it was worth it for the experiences we had.",
        createdAt: "2023-05-22T16:45:00Z",
    },
]

// API functions
// API functions
export async function getActiveBooking(): Promise<Booking | null> {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Get the first reserved booking
            const booking = mockBookings?.find((b) => b.status === "Reserved" || b.status === "Approved");

            if (!booking) return resolve(null);

            // Fetch related tour package
            const tourPackage = mockTourPackages.find((tp) => tp.id === booking.tourPackageId);

            if (!tourPackage) return resolve(null); // Ensure tourPackage exists

            // Fetch related data
            const location = mockLocations.find((loc) => loc.tourPackageId === booking.tourPackageId) || undefined;
           
            const selectedOption = mockTourPackageOptions.find((tpo) => tpo.id === booking.selectedOptionId);
            const tourists = mockTourists.filter((t) => [1, 2, 3].includes(Number.parseInt(t.id.replace("t", ""))));
            const payments = mockPayments.filter((p) => p.bookingId === booking.id);

            resolve({
                ...booking,
                tourPackage: {
                    ...tourPackage,
                    location,
                },
                selectedOption,
                tourists,
                payments,
            });
        }, 2000); // Simulate delay
    });
}



export async function getCompletedBookings(): Promise<Booking[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Get completed bookings
            const bookings = mockBookings?.filter((b) => b.status === "Completed");

            // Enrich the bookings with related data
            const enrichedBookings = bookings?.map((booking) => {
                const tourPackage = mockTourPackages.find((tp) => tp.id === booking.tourPackageId);
                const selectedOption = mockTourPackageOptions.find((tpo) => tpo.id === booking.selectedOptionId);

                return {
                    ...booking,
                    tourPackage,
                    selectedOption,
                };
            });

            resolve(enrichedBookings);
        }, 2000); // 2-second delay before resolving the promise
    });
}


export async function getAllBookings(): Promise<Booking[]> {
    // Enrich the bookings with related data
    return mockBookings?.map((booking) => {
        const tourPackage = mockTourPackages.find((tp) => tp.id === booking.tourPackageId)
        const selectedOption = mockTourPackageOptions.find((tpo) => tpo.id === booking.selectedOptionId)
        const tourists = mockTourists.filter((t) => [1, 2, 3].includes(Number.parseInt(t.id.replace("t", ""))))

        return {
            ...booking,
            tourPackage,
            selectedOption,
            tourists: [tourists[0]], // Just include the primary tourist for the list view
        }
    })
}

export async function getBookingById(id: string): Promise<Booking | null> {
    const booking = mockBookings?.find((b) => b.id === id)

    if (!booking) return null

    // Enrich the booking with related data
    const tourPackage = mockTourPackages.find((tp) => tp.id === booking.tourPackageId) || { id: "" };
    const selectedOption = mockTourPackageOptions.find((tpo) => tpo.id === booking.selectedOptionId)
    const tourists = mockTourists.filter((t) => [0, 1, 2].includes(Number.parseInt(t.id.replace("t", ""))))
    const location = mockLocations.find((loc) => loc.tourPackageId === booking.tourPackageId) || undefined;
    const payments = mockPayments.filter((p) => p.bookingId === booking.id)

    return {
        ...booking,
        tourPackage: {
            ...tourPackage,
            location,
        },
        selectedOption,
        tourists,
        payments,
    }
}

export async function getTouristById(id: string): Promise<Tourist | null> {
    return mockTourists.find((t) => t.id === id) || null
}

export async function getReviews(): Promise<Review[]> {
    // Enrich the reviews with related data
    return mockReviews.map((review) => {
        const tourPackage = mockTourPackages.find((tp) => tp.id === review.tourPackageId)

        return {
            ...review,
            tourPackage,
        }
    })
}

export async function generateProformaInvoice(bookingId: string): Promise<string> {
    // In a real application, this would generate a PDF or HTML invoice
    // For this example, we'll just return a JSON string
    const booking = await getBookingById(bookingId)

    if (!booking) throw new Error("Booking not found")

    const invoice = {
        invoiceNumber: "00001",
        invoiceTo: {
            name: booking.tourists?.[0].firstname + " " + booking.tourists?.[0].lastname,
            address: booking.tourists?.[0].address,
            country: booking.tourists?.[0].country,
        },
        companyInfo: {
            name: "BonVas Tours",
            address: "Ecocent Road, Kumasi, Ghana",
            phone: "+233 502-343-542",
            email: "info@bonvastours.com",
        },
        touristsInfo: {
            names: booking.tourists?.map((t) => t.firstname + " " + t.lastname).join(", "),
            issuedDate: format(new Date(), "dd MMM yyyy"),
            bookingReference: booking.tnr,
        },
        paymentInfo: booking.payments?.map((p) => ({
            transactionId: p.transactionId,
            date: format(new Date(p.createdAt), "dd MMM yyyy"),
            installmentNumber: p.installmentNumber || 1,
            amount: p.amount,
        })),
        tripInfo: {
            startDate: booking.selectedOption?.startDate,
            endDate: booking.selectedOption?.endDate,
            departurePoint: booking.departurePoint,
        },
    }

    return JSON.stringify(invoice, null, 2)
}


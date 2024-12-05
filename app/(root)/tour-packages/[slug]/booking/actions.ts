'use server';

import { TourOptionWithQuantityProp } from "@/type";
import emailjs from 'emailjs-com';

export async function submitBooking(
    formValues: { name: string; email: string; phone: string; address: string },
    title?: string,
    parsedTourOption?: TourOptionWithQuantityProp,
    total?: number
) {
    try {
        // Generate a random user ID
        const generateRandomUserId = () => `user_${Math.random().toString(36).substring(2, 10)}`;

        // Local variables for EmailJS service credentials
        const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
        const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;

        // Randomly generated User ID
        const EMAILJS_USER_ID = generateRandomUserId();

        // Prepare the email data
        const templateParams = {
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone,
            address: formValues.address,
            tourTitle: title || "Not Provided",
            tourDetails: JSON.stringify(parsedTourOption || {}, null, 2),
            total: total || 0,
        };

        // Send email using EmailJS
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID);

        return {
            success: true,
            bookingId: EMAILJS_USER_ID, // Use the generated user ID as booking ID if needed
        };
    } catch (error) {
        console.error("Email sending failed:", error);
        return {
            success: false,
            message: "Failed to send booking details. Please try again later."
        };
    }
}

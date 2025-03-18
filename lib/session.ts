import { Tourist } from "@prisma/client";
import { cookies } from "next/headers";

// Session keys
const SESSION_KEYS = {
  BOOKING: "booking",
  TOURISTS: "tourists",
  SELECTED_TOURIST: "selectedTourist",
};

// Get session data
export async function getSession() {
  const cookieStore = await cookies(); // Use `await` here

    const booking = cookieStore.get(SESSION_KEYS.BOOKING)?.value;
    const tourists = cookieStore.get(SESSION_KEYS.TOURISTS)?.value;
    const selectedTourist = cookieStore.get(SESSION_KEYS.SELECTED_TOURIST)?.value;

     return {
    booking: booking ? JSON.parse(booking) : null,
    tourists: tourists ? JSON.parse(tourists) : null,
    selectedTourist: selectedTourist ? JSON.parse(selectedTourist) as Tourist : null, 
  };
  
}


// Set session data
export async function setSession(key: string, value: any) {
  const cookieStore = await cookies(); // Use `await` here
  cookieStore.set(key, JSON.stringify(value), {
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}

// Clear session data
export async function clearSession() {
  const cookieStore = await cookies(); 
  Object.values(SESSION_KEYS).forEach((key) => {
    cookieStore.delete(key);
  });
}
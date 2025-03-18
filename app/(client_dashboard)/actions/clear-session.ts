"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SESSION_KEYS = {
  BOOKING: "booking",
  TOURISTS: "tourists",
  SELECTED_TOURIST: "selectedTourist",
};

// Function to clear session cookies
export async function clearSessionAndLogout() {
 const cookieStore = await cookies(); 
  Object.values(SESSION_KEYS).forEach((key) => {
    cookieStore.delete(key);
  });

  // Redirect to the home page after clearing session
  redirect("/");
}

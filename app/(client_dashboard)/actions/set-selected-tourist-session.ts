"use server";

import { setSession } from "@/lib/session";
import { Tourist } from "@prisma/client";

export async function setSelectedTouristSession(tourist: Tourist) {
  try {
    // Set the selected tourist in the session
    await setSession("selectedTourist", tourist);
    return { success: true };
  } catch (error) {
    console.error("Error setting selected tourist:", error);
    return { success: false };
  }
}
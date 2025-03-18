import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export async function middleware(request: Request) {
  const session = await getSession(); 
  if (!session.booking && !session.selectedTourist) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/client/dashboard",
};

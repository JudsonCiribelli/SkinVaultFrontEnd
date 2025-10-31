import { NextRequest, NextResponse } from "next/server";
import { getCookiesClient } from "./lib/cookiesClient";
import api from "./services/api";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname === "/") {
    return NextResponse.next();
  }

  const token = await getCookiesClient();

  if (pathname.startsWith("/")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    const isValid = await validateToken(token);

    if (!isValid) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  return NextResponse.next();
}

async function validateToken(token: string) {
  if (!token) {
    return false;
  }

  try {
    await api.get("/session", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

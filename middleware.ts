import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/signup", "/login"];

async function validateToken(token: string) {
  if (!token) return false;
  const apiBaseUrl = process.env.API_BASE_URL || "http://localhost:3333";

  try {
    const response = await fetch(`${apiBaseUrl}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    });

    return response.ok;
  } catch (error) {
    console.error("Erro ao validar token:", error);
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("session")?.value;

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  const signupUrl = new URL("/signup", req.url);

  if (!token) {
    console.log("Middleware: Sem token, redirecionando para /signup");
    return NextResponse.redirect(signupUrl);
  }

  const isValid = await validateToken(token);

  if (!isValid) {
    return NextResponse.redirect(signupUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

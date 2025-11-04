import api from "@/services/api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;

    const response = await api.post("/session", {
      email,
      password,
    });

    const { token, user } = response.data;

    const expressTime = 60 * 60 * 24 * 30;

    const cookieStorage = await cookies();
    cookieStorage.set("session", token, {
      maxAge: expressTime,
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return NextResponse.json({ user });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: error || "Erro no login",
      }),
      { status: 401 }
    );
  }
}

import api from "@/services/api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    console.log("1. Chamando a API externa (/session)...");
    const response = await api.post("/session", {
      email,
      password,
    });

    const token = response.data.auth.token;

    if (!token || typeof token !== "string") {
      console.error("4. ERRO: Token não recebido ou inválido.");
      return NextResponse.json(
        { message: "Autenticação falhou: token não recebido." },
        { status: 401 }
      );
    }

    console.log("4. Token válido. Configurando o cookie...");
    const expressTime = 60 * 60 * 24 * 30;

    const cookieStorage = await cookies();
    cookieStorage.set("session", token, {
      maxAge: expressTime,
      path: "/",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("!! ERRO NO BLOCO CATCH !!");
    console.error("Mensagem de erro:", error);

    if (error) {
      console.error(
        "Erro da API externa (error.response.data):",
        JSON.stringify(error, null, 2)
      );
      console.error("Status da API externa (error.response.status):", error);
    }

    return NextResponse.json(
      { message: "Email ou senha incorretos." },
      { status: 401 }
    );
  }
}

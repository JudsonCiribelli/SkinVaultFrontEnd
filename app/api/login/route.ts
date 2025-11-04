// app/api/login/route.ts
import api from "@/services/api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 1. Chamar sua API externa
    console.log("1. Chamando a API externa (/session)...");
    const response = await api.post("/session", {
      email,
      password,
    });

    // ========================================================
    //               📍 PONTO DE DEBUG 1 📍
    // O que sua API externa (seu backend) realmente retornou?
    // Procure por este log no seu TERMINAL.
    // ========================================================
    console.log(
      "2. Resposta da API externa (response.data):",
      JSON.stringify(response.data, null, 2)
    );

    // 2. Extrair o token (PROVÁVEL FONTE DO ERRO)
    // Talvez não seja response.data.token
    // Pode ser response.data.access_token ou só response.data
    // Para isto:
    const token = response.data.auth.token;

    // ========================================================
    //               📍 PONTO DE DEBUG 2 📍
    // Verifique se a variável 'token' tem um valor.
    // ========================================================
    console.log("3. Token extraído:", token);

    // 3. Validar se o token existe ANTES de setar o cookie
    if (!token || typeof token !== "string") {
      console.error("4. ERRO: Token não recebido ou inválido.");
      return NextResponse.json(
        { message: "Autenticação falhou: token não recebido." },
        { status: 401 }
      );
    }

    // 4. Configurar o cookie (só se o token for válido)
    console.log("4. Token válido. Configurando o cookie...");
    const expressTime = 60 * 60 * 24 * 30;

    const cookieStorage = await cookies();
    cookieStorage.set("session", token, {
      maxAge: expressTime,
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // ========================================================
    //               📍 PONTO DE DEBUG 3 📍
    // Se a API externa falhar (ex: 401, 500), cairá aqui.
    // ========================================================
    console.error("!! ERRO NO BLOCO CATCH !!");
    console.error("Mensagem de erro:", error);

    // Se você usa Axios, o erro da API vem em 'error.response'
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

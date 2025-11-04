import { cookies } from "next/headers";

export async function getCookiesServer() {
  const cookiesStorage = await cookies();

  const token = cookiesStorage.get("session")?.value;

  return token || null;
}

import { getCookie } from "cookies-next";

export async function getCookiesClient() {
  const token = await getCookie("session");

  return token;
}

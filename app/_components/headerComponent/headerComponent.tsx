import Image from "next/image";
import SheetsComponent from "../sheetsComponent/sheetsComponent";
import Link from "next/link";
import { getCookiesServer } from "@/lib/cookiesServer";
import api from "@/services/api";

async function GetUser() {
  const token = await getCookiesServer();

  try {
    const response = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
        cache: "no-store",
      },
    });
    return response.data.user;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const HeaderComponent = async () => {
  const user = await GetUser();

  return (
    <header className="w-full flex items-center justify-between h-24 bg-black">
      <div className="ml-6">
        <Link href="/">
          <Image
            src="/headerLogo.png"
            alt="logo image"
            width={100}
            height={100}
            className="rounded-lg object-cover"
          />
        </Link>
      </div>
      <div className="mr-6">
        <SheetsComponent name={user?.name} email={user?.email} />
      </div>
    </header>
  );
};

export default HeaderComponent;

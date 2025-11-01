import Image from "next/image";
import SheetsComponent from "../sheetsComponent/sheetsComponent";
import Link from "next/link";

const HeaderComponent = () => {
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
        <SheetsComponent />
      </div>
    </header>
  );
};

export default HeaderComponent;

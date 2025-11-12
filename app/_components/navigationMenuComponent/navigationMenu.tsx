import Link from "next/link";
import { Button } from "../ui/button";

interface NavigationMenuProps {
  name: string;
}

const NavigationMenuComponent = ({ name }: NavigationMenuProps) => {
  return (
    <div>
      <Button asChild className="xl:w-[150px] p-5">
        <Link href="/">{name}</Link>
      </Button>
    </div>
  );
};

export default NavigationMenuComponent;

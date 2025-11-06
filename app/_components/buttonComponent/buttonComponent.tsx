import Link from "next/link";
import { Button } from "../ui/button";

interface ButtonComponentProps {
  name: string;
  children: React.ReactNode;
}
const ButtonComponent = ({ name, children }: ButtonComponentProps) => {
  return (
    <Button
      className="flex gap-2 items-center justify-center w-[150px]"
      asChild
    >
      <Link href="/">
        <h2>{name}</h2>
        {children}
      </Link>
    </Button>
  );
};

export default ButtonComponent;

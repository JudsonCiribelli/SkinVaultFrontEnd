import { Button } from "../ui/button";
import { MouseEventHandler } from "react";

interface ButtonComponentProps {
  name: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const ButtonComponent = ({ name, children, onClick }: ButtonComponentProps) => {
  return (
    <Button
      onClick={onClick}
      className="flex gap-2 items-center justify-center w-[150px]"
    >
      <h2>{name}</h2>
      {children}
    </Button>
  );
};

export default ButtonComponent;

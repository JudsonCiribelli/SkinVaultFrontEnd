"use client";
import {
  ArrowDownUp,
  CircleDollarSign,
  CreditCard,
  Eye,
  Handbag,
  LogOut,
  Menu,
  MessageSquareCode,
  RefreshCw,
  Store,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import ButtonComponent from "../buttonComponent/buttonComponent";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface sheetsProps {
  name: string;
  email: string;
}

const SheetsComponent = ({ name, email }: sheetsProps) => {
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [isSheetsOpen, setIsSheetsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {}, [userName, userEmail]);

  const handleDeleteCookie = () => {
    deleteCookie("session", { path: "/" });

    setIsSheetsOpen(false);

    router.replace("/login");
  };

  return (
    <Sheet open={isSheetsOpen} onOpenChange={setIsSheetsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" className="p-7 rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-start justify-between mt-14">
          <div className="flex ml-4 gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="flex flex-col">
              <h1 className="text-sm">{userName}</h1>
              <p className="text-xs">{userEmail}</p>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col mx-2">
            <div className="ml-4 space-y-4">
              <ButtonComponent name="Profile">
                <User size={16} />
              </ButtonComponent>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col mx-2">
            <div className="ml-4 space-y-4">
              <ButtonComponent name="Deposit">
                <CircleDollarSign size={16} />
              </ButtonComponent>

              <ButtonComponent name="Withdraw">
                <CreditCard size={16} />
              </ButtonComponent>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col mx-2">
            <div className="ml-4 space-y-4">
              <ButtonComponent name="Trades">
                <RefreshCw size={16} />
              </ButtonComponent>

              <ButtonComponent name="Sell Items">
                <Handbag size={16} />
              </ButtonComponent>

              <ButtonComponent name="My Stall">
                <Store size={16} />
              </ButtonComponent>

              <ButtonComponent name="Offers">
                <ArrowDownUp size={16} />
              </ButtonComponent>

              <ButtonComponent name="Watchlist">
                <Eye size={16} />
              </ButtonComponent>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col mx-2">
            <div className="ml-4 space-y-4">
              <ButtonComponent name="Support">
                <MessageSquareCode size={16} />
              </ButtonComponent>

              <Button
                className="flex gap-2 w-[150px]"
                onClick={handleDeleteCookie}
              >
                <h2>Logout</h2>
                <LogOut size={16} />
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetsComponent;

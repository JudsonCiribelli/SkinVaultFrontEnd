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

const SheetsComponent = () => {
  return (
    <Sheet>
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
              <h1 className="text-sm">Judson Ciribelli</h1>
              <p className="text-xs">judson.ciribelli17@gmail.com</p>
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

              <ButtonComponent name="Logout">
                <LogOut size={16} />
              </ButtonComponent>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetsComponent;

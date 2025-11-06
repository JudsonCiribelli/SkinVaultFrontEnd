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
import Link from "next/link";

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
              <Button
                className="flex gap-2 items-center justify-center w-[150px]"
                asChild
              >
                <Link href="/">
                  <h2>Profile</h2>
                  <User size={16} />
                </Link>
              </Button>
            </div>
          </div>
          <Separator className="my-4" />

          <div className="flex flex-col mx-2">
            <div className="ml-4 space-y-4">
              <Button
                className="flex gap-2 items-center justify-center w-[150px] bg-green-500"
                asChild
              >
                <Link href="/">
                  <h2>Deposito</h2>
                  <CircleDollarSign size={16} />
                </Link>
              </Button>

              <Button
                className="flex gap-2 items-center justify-center w-[150px] bg-blue-500 "
                asChild
              >
                <Link href="/">
                  <h2>Withdraw</h2>
                  <CreditCard size={16} />
                </Link>
              </Button>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col mx-2">
            <div className="ml-4 space-y-4">
              <Button
                className="flex gap-2 items-center justify-center w-[150px] bg-amber-600"
                asChild
              >
                <Link href="/">
                  <h2>Trades</h2>
                  <RefreshCw size={16} />
                </Link>
              </Button>

              <Button
                className="flex gap-2 items-center justify-center w-[150px] bg-yellow-500"
                asChild
              >
                <Link href="/">
                  <h2>Sell Items</h2>
                  <Handbag size={16} />
                </Link>
              </Button>

              <Button
                className="flex gap-2 items-center justify-center w-[150px] bg-yellow-500"
                asChild
              >
                <Link href="/">
                  <h2>My Stall</h2>
                  <Store size={16} />
                </Link>
              </Button>

              <Button
                className="flex gap-2 items-center justify-center w-[150px] bg-purple-800"
                asChild
              >
                <Link href="/">
                  <h2>Offers</h2>
                  <ArrowDownUp />
                </Link>
              </Button>

              <Button
                className="flex gap-2 items-center justify-center w-[150px] bg-blue-400"
                asChild
              >
                <Link href="/">
                  <h2>Watchlist</h2>
                  <Eye size={16} />
                </Link>
              </Button>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col mx-2">
            <div className="ml-4 space-y-4">
              <Button
                className="flex gap-2 items-center justify-center w-[150px] bg-gray-600"
                asChild
              >
                <Link href="/">
                  <h2>Support</h2>
                  <MessageSquareCode size={16} />
                </Link>
              </Button>

              <Button
                className="flex gap-2 items-center justify-center w-[150px] bg-red-800"
                asChild
              >
                <Link href="/">
                  <h2>Logout</h2>
                  <LogOut size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetsComponent;

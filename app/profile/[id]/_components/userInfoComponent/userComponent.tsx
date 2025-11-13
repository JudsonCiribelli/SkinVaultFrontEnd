"use client";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { StarIcon } from "lucide-react";
import FormSkinComponent from "../formSkinComponent/formSkinComponent";

type UserProps = {
  name: string;
  email: string;
  id?: string;
  balance: string;
  reviewCount: number;
  averageRating: number;
};

interface User {
  user: UserProps;
}

const UserComponent = ({ user }: User) => {
  const addNewSkin = () => {
    console.log("Clicou");
  };

  return (
    <>
      <div className="w-full flex flex-col items-center mx-2 xl:flex-row">
        <div className="w-full h-28 bg-gray-800 my-4 rounded-lg p-2 xl:w-[600px] lg:w-[500px] ">
          <h1 className="text-lg text-white">{user.name}</h1>
          <p className="font-normal text-xs text-white">{user.email}</p>
          <div className="flex gap-1 items-center">
            <div>
              <StarIcon size={14} className="fill-yellow-400 text-yellow-400" />
            </div>
            <p className="text-xs text-white">{user.reviewCount}</p>
          </div>
          <span className="text-xs text-white">
            {user.averageRating} vendas
          </span>
        </div>
        <div className=" w-full  bg-gray-800 p-3 my-4 rounded-lg h-28 space-y-4  xl:w-[400px] mx-2">
          <p className="text-sm text-white">Tem algum que deseja vender ? </p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                onClick={addNewSkin}
                className="text-white hover:cursor-pointer"
              >
                Cadastre
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-full ml-1.5 p-4 mb-20 mt-10 bg-gray-800 xl:p-9 lg:p-6 xs:ml-0.5"
              align="center"
            >
              <FormSkinComponent name={user.name} id={user.id!} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default UserComponent;

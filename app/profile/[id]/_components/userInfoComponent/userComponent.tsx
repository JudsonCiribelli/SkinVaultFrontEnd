import { StarIcon } from "lucide-react";

type UserProps = {
  name: string;
  email: string;
  balance: string;
  reviewCount: number;
  averageRating: number;
};

interface User {
  user: UserProps;
}

const UserComponent = ({ user }: User) => {
  return (
    <div className="w-full h-28 bg-gray-800 m-1 rounded-lg p-2 xl:w-[600px] lg:w-[500px]">
      <h1 className="text-lg text-white">{user.name}</h1>
      <p className="font-normal text-xs text-white">{user.email}</p>
      <div className="flex gap-1 items-center">
        <div>
          <StarIcon size={14} className="fill-yellow-400 text-yellow-400" />
        </div>
        <p className="text-xs text-white">{user.reviewCount}</p>
      </div>
      <span className="text-xs text-white">{user.averageRating} vendas</span>
    </div>
  );
};

export default UserComponent;

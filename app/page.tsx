import api from "@/services/api";
import Image from "next/image";
import NavigationMenuComponent from "./_components/navigationMenuComponent/navigationMenu";
import { Button } from "./_components/ui/button";

export interface UserProps {
  id: string;
  name: string;
  email: string;
}

export interface ItemProps {
  id: string;
  categoryItemId: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  imageUrl: string;
  ownerId: string;
  price: string;
  sellerName: string;
  wear: string;
}

export interface CategoryProps {
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

async function getCategoryNameSkin() {
  try {
    const response = await api.get("/categoryNameSkin");

    return response.data.skins;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getCategory() {
  try {
    const category = await api.get("/category");

    console.log(category.data);
    return category.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

const Home = async () => {
  const data = await getCategoryNameSkin();
  const category = await getCategory();
  const BASE_FILE_URL = "http://localhost:3333/files";

  return (
    <main className="w-full flex flex-col my-2 items-center justify-center">
      <div>
        <div className="flex gap-2 ml-1 my-3 xl:gap-10">
          {category.map((categoryItem: CategoryProps) => (
            <NavigationMenuComponent
              key={categoryItem.id}
              name={categoryItem.name}
            />
          ))}
        </div>
      </div>
      <h1>
        {data.map((item: ItemProps) => (
          <div key={item.id} className="flex flex-col gap-4">
            <h1>{item.name}</h1>
            <Image
              src={`${BASE_FILE_URL}/${item.imageUrl}`}
              width={200}
              height={200}
              alt="Skin image"
              unoptimized={true}
            />
            <span>{item.price}</span>
          </div>
        ))}
      </h1>
    </main>
  );
};

export default Home;

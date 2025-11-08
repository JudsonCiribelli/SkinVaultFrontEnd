import api from "@/services/api";
import Image from "next/image";

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

async function getCategoryNameSkin() {
  try {
    const response = await api.get("/categoryNameSkin");

    return response.data.skins;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const Home = async () => {
  const data = await getCategoryNameSkin();
  const BASE_FILE_URL = "http://localhost:3333/files";

  return (
    <section className="w-full flex">
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
    </section>
  );
};

export default Home;

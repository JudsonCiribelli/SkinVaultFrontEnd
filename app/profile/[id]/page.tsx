import { getCookiesServer } from "@/lib/cookiesServer";
import api from "@/services/api";
import UserComponent from "./_components/userInfoComponent/userComponent";

const UserPage = async () => {
  const token = await getCookiesServer();

  const response = await api.get("user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <section>
      <div className="w-full my-1 flex items-center">
        <UserComponent user={response.data.user} />
      </div>
    </section>
  );
};

export default UserPage;

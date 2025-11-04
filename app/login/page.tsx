import Image from "next/image";
import FormComoponent from "./_components/formComponent/formComponent";

const LoginPage = () => {
  return (
    <section className="w-full  flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[900px] h-[700px]  gap-10">
        <Image
          src="/logo.png"
          alt="logo image"
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />
        <FormComoponent />
      </div>
    </section>
  );
};

export default LoginPage;

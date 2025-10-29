"use client";
import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import api from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  email: z.string().nonempty({ message: "Preencha todos os campos" }),
  password: z.string().nonempty({ message: "Preencha todos os campos" }),
});

type FormData = z.infer<typeof schema>;

const FormComoponent = () => {
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const handleLoginUser = async (formData: FormData) => {
    try {
      await api.post("/session", {
        email: formData.email,
        password: formData.password,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        className="space-y-4 flex flex-col items-center"
        onSubmit={form.handleSubmit(handleLoginUser)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="w-[350px] lg:w-[400px] xl:w-[500px]"
                  placeholder="seu@email.com"
                  type="email"
                  {...field}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  className="w-[350px] lg:w-[400px] xl:w-[500px]"
                  placeholder="********"
                  type="password"
                  {...field}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Entrando...
            </>
          ) : (
            "Entrar"
          )}
        </Button>

        <div className="flex items-center justify-center ">
          <span>
            Não possui conta ? <Link href="/signup">Cadastre-se</Link>
          </span>
        </div>
      </form>
    </Form>
  );
};

export default FormComoponent;

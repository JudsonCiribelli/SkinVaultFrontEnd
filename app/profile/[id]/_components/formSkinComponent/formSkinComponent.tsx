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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

interface userProps {
  name: string;
  id: string;
}

const categories = [
  { id: "uuid-category-rifles-123", name: "Rifles" },
  { id: "uuid-category-knives-456", name: "Knifes" },
  { id: "uuid-category-gloves-789", name: "Gloves" },
  { id: "uuid-category-pistols-abc", name: "Pistols" },
];

const skinSchema = z.object({
  name: z.string().nonempty({ message: "Preencha todos os campos" }),
  categoryItem: z.string().nonempty({ message: "Preencha todos os campos" }),
  float: z.number().min(11).max(12),
  banner: z.string().nonempty({ message: "Preencha todos os campos" }),
  sellerName: z.string().nonempty({ message: "Preencha todos os campos" }),
  price: z.number(),
  wear: z.string().nonempty({ message: "Preencha todos os campos" }),
  ownerId: z.string().nonempty({ message: "Preencha todos os campos" }),
});

type skinFormValue = z.infer<typeof skinSchema>;

const FormSkinComponent = ({ name, id }: userProps) => {
  const form = useForm<skinFormValue>({
    resolver: zodResolver(skinSchema),
    defaultValues: {
      name: "",
      categoryItem: "",
      float: 0,
      banner: "",
      sellerName: name,
      wear: "",
      ownerId: id,
    },
  });
  return (
    <Form {...form}>
      <form className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Nome</FormLabel>
              <FormControl>
                <Input
                  className="w-[350px] lg:w-[400px] xl:w-[500px]"
                  placeholder="Ex: AK-47 | Redline"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoryItem"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Categories</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[350px] lg:w-[400px] xl:w-[500px]">
                    <SelectValue placeholder="Select one category..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Url</FormLabel>
              <FormControl>
                <Input
                  className="w-[350px] lg:w-[400px] xl:w-[500px]"
                  placeholder="https://exemple.com/image.png"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Price (R$)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Ex: 150.50"
                  className="w-[350px] lg:w-[400px] xl:w-[500px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="wear"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Type of Wear</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: Field-Tested (Testada em Campo)"
                  className="w-[350px] lg:w-[400px] xl:w-[500px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button>Cadastrar</Button>
      </form>
    </Form>
  );
};

export default FormSkinComponent;

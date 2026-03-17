"use client";

import { Button } from "@/components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "sonner";
import { applyMask } from "@/lib/mask-phone";

const schema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.email("E-mail inválido").min(1, "O e-mail é obrigatório"),
  phone: z
    .string()
    .min(14, "Telefone inválido") // "(99) 9999-9999" tem 14 caracteres
    .max(15, "Telefone inválido"), // "(99) 99999-9999" tem 15 caracteres
});

type FormData = z.infer<typeof schema>;

export function FormSection() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    try {
      await fetch("https://nasago.bubbleapps.io/api/1.1/wf/create_lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          statusCrmId: "1755805001468x775077394257990500",
          crmId: "1755805000364x472515963217510400",
          name: data.name,
          email: data.email,
          contato: data.phone,
          companyId: "1716245972374x830198274999121300",
          tagId: "",
        }),
      });

      toast.success("Inscrição realizada com sucesso!");
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao realizar a inscrição.");
    }
  }

  return (
    <section id="inscricoes" className="px-6 pt-12 pb-24 text-center">
      <h2 className="font-medium tracking-widest text-xl uppercase">
        Fique por dentro
      </h2>

      <p className="text-sm font-light mt-3">
        Cadastre seu e-mail e receba novidades sobre o PMH - 10 Anos.
      </p>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-4xl mx-auto mt-8 space-y-4"
      >
        <div>
          <input
            {...form.register("name")}
            type="text"
            placeholder="Seu nome"
            className="w-full bg-[#E3E3E3] px-6 py-3 rounded-md focus:outline-none"
            autoComplete="off"
          />
          {form.formState.errors.name?.message && (
            <span className="text-red-500 block text-start mt-1">
              {form.formState.errors.name.message}
            </span>
          )}
        </div>

        <div>
          <input
            {...form.register("phone")}
            type="text"
            placeholder="Seu telefone"
            className="w-full bg-[#E3E3E3] px-6 py-3 rounded-md focus:outline-none"
            autoComplete="off"
            onChange={(e) => {
              const masked = applyMask(e.target.value);
              form.setValue("phone", masked);
            }}
          />
          {form.formState.errors.email?.message && (
            <span className="text-red-500 block text-start mt-1">
              {form.formState.errors.email.message}
            </span>
          )}
        </div>

        <div>
          <input
            {...form.register("email")}
            type="email"
            placeholder="Seu e-mail"
            className="w-full bg-[#E3E3E3] px-6 py-3 rounded-md focus:outline-none"
            autoComplete="off"
          />
          {form.formState.errors.email?.message && (
            <span className="text-red-500 block text-start mt-1">
              {form.formState.errors.email.message}
            </span>
          )}
        </div>

        <Button
          type="submit"
          className="mx-auto"
          disabled={form.formState.isSubmitting}
        >
          INSCREVER
        </Button>
      </form>
    </section>
  );
}

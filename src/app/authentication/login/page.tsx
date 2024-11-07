"use client";

import React from "react";
import { Eye, EyeOff, Lock, Phone } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Colors from "@/constants/Colors";
import Link from "next/link";

// Form schema with validation rules
const formSchema = z.object({
  phone: z
    .string({ message: "Número invalido" })
    .regex(/^8[234567]\d{7}$/, "Número invalido")
    .min(9, "Número deve ter 09 dígitos")
    .max(9, "Número deve ter 09 dígitos"),

  password: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(50, "Senha muito longa"),
});

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    // Implementar lógica de login aqui
    console.log("Form submitted:", values);
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <main className="flex flex-col min-h-[75vh] w-full items-center justify-center p-4">
      <Form {...form}>
        <div className="flex flex-col gap-4 items-center justify-center mb-11">
          <h1 className="text-2xl font-bold text-primary">
            Olá, bem vindo de volta!
          </h1>

          <p className="text-base text-gray-500 text-center">
            Informe seu número e senha para continuar com a sua conta
          </p>
        </div>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-3 w-full max-w-md px-2"
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="Digite seu número"
                    inputMode="numeric"
                    className="placeholder:text-gray-500 shadow-sm text-base bg-gray-100 h-12 border-none"
                    startAdornment={<Phone size={22} className="text-gray-500" />}
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
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Digite sua senha"
                      className="placeholder:text-gray-500 shadow-sm text-base bg-gray-100 h-12 border-none"
                      startAdornment={<Lock size={22} className="text-gray-500" />}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 px-0"
                      onClick={handleTogglePassword}
                      aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                      {showPassword ? (
                        <EyeOff size={22} color={Colors.GRAY[500]} />
                      ) : (
                        <Eye size={22} color={Colors.GRAY[500]} />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
                <div className="flex justify-end">
                  <Link
                    href="#"
                    className="text-base text-primary px-0 py-1"
                  >
                    Esqueceu sua senha?
                  </Link>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full text-base h-12">
            Entrar
          </Button>

          <div className="flex items-center gap-1 justify-center pt-2">
            <span className="text-gray-700">Ainda não tem uma conta?</span>
            <Link
              href="/authentication/register"
              className="text-base text-primary px-0"
            >
              Cadastre-se
            </Link>
          </div>
        </form>
      </Form>
    </main>
  );
}

"use client";

import React from "react";
import { Eye, EyeOff, Phone, User, Mail, Lock, Calendar } from "lucide-react";
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
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import Colors from "@/constants/Colors";
import Link from "next/link";

const formSchema = z
  .object({
    fullName: z
      .string()
      .min(6, "Nome deve ter no mínimo 6 caracteres")
      .max(50, "Nome muito longo"),
    phone: z
      .string()
      .regex(/^8[234567]\d{7}$/, "Número invalido")
      .min(9, "Número deve ter 09 dígitos")
      .max(9, "Número deve ter 09 dígitos"),
    password: z
      .string()
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .max(50, "Senha muito longa"),
    confirmPassword: z.string(),
    terms: z.boolean().refine((value) => value === true, {
      message: "Você deve aceitar os termos e condições",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

const getIconColor = (field: any, formState: any, name: string) => {
  if (formState.errors[name]) return "text-destructive";
  if (field.value) return "text-primary";
  return "text-gray-500";
};

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <main className="flex flex-col min-h-[90vh] items-center justify-center w-full p-4">
      <Form {...form}>
        <div className="flex flex-col gap-4 items-center justify-center mb-11">
          <h1 className="text-2xl font-bold text-primary">Bem vindo(a) a Extra Money</h1>
          <p className="text-base text-gray-500 text-center">
            Preencha os dados abaixo para criar sua conta
            e começar a ganhar dinheiro extra

          </p>
        </div>

        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-3 w-full max-w-md px-2"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Nome completo"
                    className="placeholder:text-gray-500 shadow-sm text-base text-gray-700 bg-gray-100 h-12 border-none"
                    startAdornment={
                      <User 
                        size={22} 
                        className={getIconColor(field, form.formState, "fullName")}
                      />
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="Número de telefone"
                    inputMode="numeric"
                    className="placeholder:text-gray-500 shadow-sm text-base text-gray-700 bg-gray-100 h-12 border-none"
                    startAdornment={
                      <Phone 
                        size={22} 
                        className={getIconColor(field, form.formState, "phone")}
                      />
                    }
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
                      placeholder="Senha"
                      className="placeholder:text-gray-500 shadow-sm text-base text-gray-700 bg-gray-100 h-12 border-none"
                      startAdornment={
                        <Lock 
                          size={22} 
                          className={getIconColor(field, form.formState, "password")}
                        />
                      }
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
                        <EyeOff 
                          size={22} 
                          className="text-gray-500"
                        />
                      ) : (
                        <Eye 
                          size={22} 
                          className="text-gray-500"
                        />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirmar senha"
                      className="placeholder:text-gray-500 shadow-sm text-base text-gray-700 bg-gray-100 h-12 border-none"
                      startAdornment={
                        <Lock 
                          size={22} 
                          className={getIconColor(field, form.formState, "confirmPassword")}
                        />
                      }
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 px-0"
                      onClick={handleToggleConfirmPassword}
                      aria-label={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                      {showConfirmPassword ? (
                        <EyeOff 
                        size={22} 
                        className="text-gray-500"
                      />
                    ) : (
                      <Eye 
                        size={22} 
                        className="text-gray-500"
                      />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start space-x-3 justify-center py-2 space-y-0">
                <div className="flex flex-row items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none items-center justify-center">
                  <p className="text-sm text-gray-500">
                    Concordo com os{" "}
                    <Link href="#" className="text-primary">
                      termos de serviço
                    </Link>{" "}
                    e{" "}
                    <Link href="#" className="text-primary">
                      política de privacidade
                    </Link>
                  </p>
                </div>
                </div>
                <FormMessage className="pt-2"/>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full text-base h-12">
            Criar conta
          </Button>

          <div className="flex items-center gap-1 justify-center pt-2">
            <span className="text-gray-700">Já tem uma conta?</span>
            <Link
              href="/authentication/login"
              className="text-base text-primary px-0"
            >
              Entrar
            </Link>
          </div>
        </form>
      </Form>
    </main>
  );
}

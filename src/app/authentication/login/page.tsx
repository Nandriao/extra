"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import * as z from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Eye, EyeOff, Phone, Lock, Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { toast } from '@/hooks/use-toast';
import axios from 'axios';

const formSchema = z.object({
  phone: z
    .string()
    .regex(/^8[234567]\d{7}$/, "Número invalido")
    .min(9, "Número deve ter 09 dígitos")
    .max(9, "Número deve ter 09 dígitos"),
  password: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(50, "Senha muito longa"),
});

const getIconColor = (field: any, formState: any, name: string) => {
  if (formState.errors[name]) return "text-destructive";
  if (field.value) return "text-primary";
  return "text-gray-500";
};

interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: string;
    fullName: string;
    phone: string;
  };
}

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post<LoginResponse>('/auth/login', values);

      try {
        if (response.data.token !== null) {
          localStorage.setItem("cartItems", JSON.stringify(response.data.token));
        }
      } catch (storageError) {
        console.error('Failed to store token:', storageError);
        toast({
          title: "Aviso",
          description: "Não foi possível salvar suas credenciais. Verifique as configurações do navegador.",
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "Sucesso!",
        description: "Login realizado com sucesso!",
        variant: "default",
      });

      router.push('/');

    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.response?.data?.message || 'Credenciais inválidas',
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <main className="flex flex-col min-h-[90vh] items-center justify-center w-full p-2">
      <Form {...form}>
        <div className="flex flex-col gap-4 items-center justify-center mb-11">
          <h1 className="text-2xl font-bold text-primary">Bem vindo(a) de volta!</h1>
          <p className="text-base text-gray-500 text-center">
            Entre com suas credenciais para acessar sua conta
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
                        <EyeOff size={22} className="text-gray-500" />
                      ) : (
                        <Eye size={22} className="text-gray-500" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Link
              href="/authentication/forgot-password"
              className="text-sm text-primary"
            >
              Esqueceu a senha?
            </Link>
          </div>

          <Button 
            type="submit" 
            className="w-full text-base h-12"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                Entrando...
              </>
            ) : (
              "Entrar"
            )}
          </Button>

          <div className="flex items-center gap-1 justify-center pt-2">
            <span className="text-gray-700">Não tem uma conta?</span>
            <Link
              href="/authentication/register"
              className="text-base text-primary px-0"
            >
              Criar conta
            </Link>
          </div>
        </form>
      </Form>
    </main>
  );
}

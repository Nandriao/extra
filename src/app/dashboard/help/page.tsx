"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Phone, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HelpPage = () => {
  const router = useRouter();

  const faqItems = [
    {
      question: "Como faço um depósito?",
      answer: "Você pode fazer depósitos através do M-Pesa, transferência bancária ou outros métodos disponíveis."
    },
    {
      question: "Quanto tempo leva para processar um saque?",
      answer: "Os saques geralmente são processados em até 24 horas úteis."
    },
    {
      question: "Como funciona o sistema de medalhas?",
      answer: "O sistema de medalhas é baseado no seu nível de atividade e investimento na plataforma."
    },
  ];

  return (
    <div className="py-6 px-2 max-w-2xl min-w-screen bg-white">
      <div className="">
        <div className="flex items-center gap-4 mb-6">
          <Button onClick={() => router.back()} variant="ghost" size="icon" aria-label="Voltar">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900">Ajuda</h1>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg px-3  space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Contato</h2>
            
            <div className="grid grid-cols-1 gap-4">
              <Link 
                href="tel:+258843794444"
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <p className="text-base text-gray-900">Ligar para suporte</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-500" />
              </Link>

              <Link 
                href="mailto:suporte@exemplo.com"
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <p className="text-base text-gray-900">Enviar email</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-500" />
              </Link>

              <Link 
                href="https://wa.me/+258843794444"
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-gray-500" />
                  <p className="text-base text-gray-900">WhatsApp</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-500" />
              </Link>
            </div>
          </div>

          <div className=" px-3 space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Perguntas frequentes</h2>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className="p-3 bg-gray-50 rounded-lg"
                >
                  <p className="text-base font-medium text-gray-900 mb-2">
                    {item.question}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage; 
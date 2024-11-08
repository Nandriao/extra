"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

toast

import Bronze from "@/assets/medalhas/bronze.png";
import Silver from "@/assets/medalhas/silver.png";
import Gold from "@/assets/medalhas/gold.png";
import Platinum from "@/assets/medalhas/platinum.png";
import Emerald from "@/assets/medalhas/emerald.png";
import Diamond from "@/assets/medalhas/diamond.png";

import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";

const plans = [
  {
    name: "Plano Bronze",
    price: 500,
    period: "semanal",
    returns: "5",
    dailyReturnMZN: "25",
    icon: Bronze,
    features: [
      "Investimento mínimo baixo",
      "Resgate a qualquer momento",
      "Suporte básico",
      "Relatórios mensais",
    ],
  },
  {
    name: "Plano Prata",
    price: 1000,
    period: "semanal",
    returns: "7.5",
    dailyReturnMZN: "75",
    icon: Silver,
    features: [
      "Investimento moderado",
      "Resgate em 30 dias",
      "Suporte prioritário",
      "Relatórios semanais",
      "Consultoria mensal",
    ],
  },
  {
    name: "Plano Ouro",
    price: 2500,
    period: "semanal",
    returns: "10",
    dailyReturnMZN: "250",
    icon: Gold,
    features: [
      "Investimento alto",
      "Resgate em 60 dias",
      "Suporte VIP",
      "Relatórios diários",
      "Consultoria semanal",
    ],
  },
  {
    name: "Plano Platina",
    price: 5000,
    period: "mensal",
    returns: "12.5",
    dailyReturnMZN: "625",
    icon: Platinum,
    features: [
      "Investimento premium",
      "Resgate em 90 dias",
      "Suporte 24/7",
      "Relatórios personalizados",
      "Consultoria quinzenal",
    ],
  },
  {
    name: "Plano Esmeralda",
    price: 10000,
    period: "mensal",
    returns: "15",
    dailyReturnMZN: "1.500",
    icon: Emerald,
    features: [
      "Investimento elite",
      "Resgate programado",
      "Gerente dedicado",
      "Dashboard exclusivo",
      "Consultoria semanal",
    ],
  },
  {
    name: "Plano Diamante",
    price: 25000,
    period: "mensal",
    returns: "17.5",
    dailyReturnMZN: "4.375",
    icon: Diamond,
    features: [
      "Investimento premium elite",
      "Resgate personalizado",
      "Gerente exclusivo 24/7",
      "Dashboard personalizado",
      "Consultoria diária",
      "Eventos VIP",
    ],
  },
];

type SelectedPlan = (typeof plans)[number] | null;

export default function InvestmentPlans() {
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan>(null);
  const [paymentConfirmation, setPaymentConfirmation] = useState("");
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleSubmitPayment = async () => {
    if (!paymentConfirmation.trim()) {
      return;
    }

    setIsProcessing(true);
    
    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 5000));
      console.log("Payment submitted:", paymentConfirmation);
      setPaymentConfirmation("");
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentMethodClick = (method: 'mpesa' | 'emola', phoneNumber: string) => {
    // Copy number to clipboard
    navigator.clipboard.writeText(phoneNumber);
    
    // Dial USSD code based on payment method
    const ussdCode = method === 'mpesa' ? '*150*02#' : '*808*04#';
    if (typeof window !== 'undefined') {
      window.location.href = `tel:${ussdCode}`;
    }
    
    // Show notification
    toast({
      title: "Número copiado",
      description: `Número ${phoneNumber} copiado para a área de transferência`,
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen py-6 px-3 bg-white">
      <div className="flex items-center gap-4">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          size="icon"
          aria-label="Voltar"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold text-gray-900">
          Planos de Investimento
        </h1>
      </div>

      <div className="max-w-7xl mx-auto pb-8 px-1 sm:px-6">
        <div className="text-center pb-6">
          <p className="mt-4 text-xl text-gray-600">
            Escolha o plano que melhor se adequa ao seu perfil de investidor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={plan.icon.src}
                  alt={`Medalha ${plan.name}`}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 text-center">
                {plan.name}
              </h3>
              <p className="mt-4 text-center text-3xl font-extrabold text-gray-900">
                {plan.price},00 MZN
              </p>
              <p className="text-center capitalize text-base text-gray-500">
                Periodo: {plan.period}
              </p>
              <p className="mt-2 text-center text-xl text-green-600 font-semibold">
                até {plan.returns}% por dia
              </p>
              <p className="text-center text-lg text-green-500">
                Até {plan.dailyReturnMZN},00 MZN/dia
              </p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Drawer>
                  <DrawerTrigger asChild>
                    <button
                      type="button"
                      className="w-full bg-blue-600 text-white rounded-md py-3 px-4 hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={() => setSelectedPlan(plan)}
                    >
                      Começar agora
                    </button>
                  </DrawerTrigger>

                  <DrawerContent className="min-h-[70vh]">
                    <div className="mx-auto w-full max-w-2xl">
                      <DrawerHeader>
                        <DrawerTitle className="flex items-center gap-3 w-full">
                          <DrawerClose asChild>
                            <Button
                              variant="ghost" 
                              size="icon"
                              className="hover:bg-gray-100"
                              aria-label="Voltar"
                            >
                              <ArrowLeft className="h-5 w-5" />
                            </Button>
                          </DrawerClose>
                          <img
                            src={plan.icon.src}
                            alt={`Medalha ${plan.name}`}
                            className="h-8 w-8 object-contain"
                          />
                          {plan.name}

                          <p className="text-rigth">{plan.price},00 MZN</p>
                        </DrawerTitle>
                      </DrawerHeader>

                      <div className="py-6 px-3">
                        <div className="grid grid-cols-2 gap-4">
                          {/* M-Pesa Payment Card */}
                          <div 
                            onClick={() => handlePaymentMethodClick('mpesa', '84XXXXXXX')}
                            className="bg-white rounded-lg p-4 border-2 border-blue-500 hover:border-blue-600 cursor-pointer transition-all"
                          >
                            <h3 className="text-lg font-semibold text-center mb-4">
                              M-Pesa
                            </h3>
                            <div className="space-y-3">
                              <p className="text-sm text-gray-600">
                                Valor:{" "}
                                <span className="font-semibold text-gray-900">
                                  {plan.price}
                                </span>
                              </p>
                              <p className="text-sm text-gray-600">
                                Número:{" "}
                                <span className="font-semibold text-gray-900">
                                  84XXXXXXX
                                </span>
                              </p>
                              <p className="text-sm text-gray-600">
                                Nome:{" "}
                                <span className="font-semibold text-gray-900">
                                  EMPRESA XYZ
                                </span>
                              </p>
                            </div>
                          </div>

                          {/* E-Mola Payment Card */}
                          <div
                            onClick={() => handlePaymentMethodClick('emola', '86XXXXXXX')}
                            className="bg-white rounded-lg p-4 border-2 border-orange-500 hover:border-orange-600 cursor-pointer transition-all"
                          >
                            <h3 className="text-lg font-semibold text-center mb-4">
                              E-Mola
                            </h3>
                            <div className="space-y-3">
                              <p className="text-sm text-gray-600">
                                Valor:{" "}
                                <span className="font-semibold text-gray-900">
                                  {plan.price}
                                </span>
                              </p>
                              <p className="text-sm text-gray-600">
                                Número:{" "}
                                <span className="font-semibold text-gray-900">
                                  86XXXXXXX
                                </span>
                              </p>
                              <p className="text-sm text-gray-600">
                                Nome:{" "}
                                <span className="font-semibold text-gray-900">
                                  EMPRESA XYZ
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Instruções:
                          </h4>
                          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                            <li>Faça a transferência do valor exato</li>

                            <li>
                              Copie a mensagem de confirmação recebida por SMS
                            </li>
                            <li>
                              Cole a mensagem de confirmação no campo abaixo
                            </li>
                            <li>Clique em &quot;Confirmar Pagamento&quot;</li>
                          </ol>
                        </div>

                        <div className="mt-6 space-y-4">
                          <Input
                            type="text"
                            placeholder="Digite o código de confirmação do pagamento"
                            value={paymentConfirmation}
                            onChange={(e) =>
                              setPaymentConfirmation(e.target.value)
                            }
                            className="w-full"
                          />
                          <Button
                            onClick={handleSubmitPayment}
                            disabled={!paymentConfirmation.trim() || isProcessing}
                            className="w-full bg-primary mb-2 h-12 text-white"
                          >
                            {isProcessing ? (
                              <>
                                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                                Processando...
                              </>
                            ) : (
                              "Confirmar Pagamento"
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

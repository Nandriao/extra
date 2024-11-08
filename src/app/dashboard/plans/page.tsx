"use client";

import { useRouter } from "next/navigation";

import Bronze from "@/assets/medalhas/bronze.png";
import Silver from "@/assets/medalhas/silver.png";
import Gold from "@/assets/medalhas/gold.png";
import Platinum from "@/assets/medalhas/platinum.png";
import Emerald from "@/assets/medalhas/emerald.png";
import Diamond from "@/assets/medalhas/diamond.png";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Plano Bronze",
    price: "500 MZN/sem",
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
    price: "1.000 MZN/sem",
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
    price: "2.500 MZN/sem", 
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
    price: "5.000 MZN/mês",
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
    price: "10.000 MZN/mês",
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
    price: "25.000 MZN/mês",
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

export default function InvestmentPlans() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
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

      <div className="max-w-7xl mx-auto pb-8 px-4 sm:px-6">

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
                {plan.price}
              </p>
              <p className="mt-2 text-center text-xl text-green-600 font-semibold">
                até {plan.returns}% por dia
              </p>
              <p className="text-center text-lg text-green-500">
                Até {plan.dailyReturnMZN} MZN/dia
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
                <button
                  type="button"
                  className="w-full bg-blue-600 text-white rounded-md py-3 px-4 hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Começar agora
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleBack}
            className="text-blue-600 hover:text-blue-800 font-medium"
            aria-label="Voltar para o Dashboard"
          >
            Voltar para o Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from 'next/link'

import Bronze from "@/assets/medalhas/bronze.png";
import Silver from "@/assets/medalhas/silver.png";
import Gold from "@/assets/medalhas/gold.png";
import Platinum from "@/assets/medalhas/platinum.png";
import Emerald from "@/assets/medalhas/emerald.png";
import Diamond from "@/assets/medalhas/diamond.png";

const plans = [
  {
    name: "Plano Bronze",
    price: "500 MZN/sem",
    returns: "8% a.a.",
    icon: Bronze,
    features: [
      "Investimento mínimo baixo",
      "Resgate a qualquer momento",
      "Suporte básico",
      "Relatórios mensais"
    ]
  },
  {
    name: "Plano Prata",
    price: "1.000 MZN/sem",
    returns: "12% a.a.",
    icon: Silver,
    features: [
      "Investimento moderado",
      "Resgate em 30 dias",
      "Suporte prioritário",
      "Relatórios semanais",
      "Consultoria mensal"
    ]
  },
  {
    name: "Plano Ouro",
    price: "2.500 MZN/sem",
    returns: "15% a.a.",
    icon: Gold,
    features: [
      "Investimento alto",
      "Resgate em 60 dias",
      "Suporte VIP",
      "Relatórios diários",
      "Consultoria semanal"
    ]
  },
  {
    name: "Plano Platina",
    price: "5.000 MZN/sem",
    returns: "18% a.a.",
    icon: Platinum,
    features: [
      "Investimento premium",
      "Resgate em 90 dias",
      "Suporte 24/7",
      "Relatórios personalizados",
      "Consultoria quinzenal"
    ]
  },
  {
    name: "Plano Esmeralda",
    price: "10.000 MZN/sem",
    returns: "20% a.a.",
    icon: Emerald,
    features: [
      "Investimento elite",
      "Resgate programado",
      "Gerente dedicado",
      "Dashboard exclusivo",
      "Consultoria semanal"
    ]
  },
  {
    name: "Plano Diamante",
    price: "25.000 MZN/sem",
    returns: "25% a.a.",
    icon: Diamond,
    features: [
      "Investimento premium elite",
      "Resgate personalizado",
      "Gerente exclusivo 24/7",
      "Dashboard personalizado",
      "Consultoria diária",
      "Eventos VIP"
    ]
  }
]

export default function InvestmentPlans() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Planos de Investimento
          </h2>
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
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                {plan.name}
              </h3>
              <p className="mt-4 text-center text-5xl font-extrabold text-gray-900">
                {plan.price}
              </p>
              <p className="mt-2 text-center text-xl text-green-600 font-semibold">
                {plan.returns}
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
          <Link
            href="/dashboard"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Voltar para o Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
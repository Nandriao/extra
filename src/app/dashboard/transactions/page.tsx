"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import Link from "next/link";

const TransactionsPage = () => {
  const transactions = [
    {
      id: 1,
      type: "deposit",
      amount: 1000,
      date: "2024-03-20",
      status: "completed",
      description: "Depósito via M-Pesa"
    },
    {
      id: 2,
      type: "withdraw",
      amount: 500,
      date: "2024-03-19",
      status: "completed",
      description: "Levantamento via M-Pesa"
    },
    // Adicione mais transações conforme necessário
  ];

  return (
    <div className="min-h-screen py-6 px-3">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/dashboard/profile">
            <Button variant="ghost" size="icon" aria-label="Voltar">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Histórico de Transações</h1>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div 
              key={transaction.id}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {transaction.type === "deposit" ? (
                    <ArrowDownCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <ArrowUpCircle className="h-6 w-6 text-red-500" />
                  )}
                  <div>
                    <p className="text-base font-medium text-gray-900">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
                <p className={`text-base font-medium ${
                  transaction.type === "deposit" ? "text-green-600" : "text-red-600"
                }`}>
                  {transaction.type === "deposit" ? "+" : "-"} 
                  {transaction.amount.toFixed(2)} MZN
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage; 
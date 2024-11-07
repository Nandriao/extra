"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowLeft, ArrowDownCircle, ArrowUpCircle, Coins } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TransactionsPage = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<'all' | 'deposit' | 'withdraw' | 'commission'>('all');

  const transactions = [
    {
      id: 1,
      type: "deposit",
      amount: 1000,
      date: "2024-03-20",
      status: "completed",
      description: "Depósito"
    },
    {
      id: 2,
      type: "withdraw",
      amount: 500,
      date: "2024-03-19",
      status: "completed",
      description: "Levantamento"
    },
    {
      id: 3,
      type: "commission",
      amount: 50,
      date: "2024-03-18",
      status: "completed",
      description: "Comissão de serviço"
    },
  ];

  const filteredTransactions = transactions.filter(transaction => 
    activeFilter === 'all' ? true : transaction.type === activeFilter
  );

  return (
    <div className="py-6 px-3">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Voltar"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900">Histórico de Transações</h1>
        </div>

        <ScrollArea className="w-full mb-4" scrollHideDelay={0}>
          <div className="flex gap-2 pb-4">
            <Button
              variant={activeFilter === 'all' ? "default" : "outline"}
              onClick={() => setActiveFilter('all')}
              className="flex items-center gap-2"
            >
              Todas
            </Button>
            <Button
              variant={activeFilter === 'deposit' ? "default" : "outline"}
              onClick={() => setActiveFilter('deposit')}
              className="flex items-center gap-2"
            >
              <ArrowDownCircle className="h-4 w-4" />
              Depósitos
            </Button>
            <Button
              variant={activeFilter === 'withdraw' ? "default" : "outline"}
              onClick={() => setActiveFilter('withdraw')}
              className="flex items-center gap-2"
            >
              <ArrowUpCircle className="h-4 w-4" />
              Levantamentos
            </Button>
            <Button
              variant={activeFilter === 'commission' ? "default" : "outline"}
              onClick={() => setActiveFilter('commission')}
              className="flex items-center gap-2"
            >
              <Coins className="h-4 w-4" />
              Comissões
            </Button>
          </div>

          <ScrollBar orientation="horizontal"/>
        </ScrollArea>

          <div className="space-y-4">
            {filteredTransactions.map((transaction) => (
              <div 
                key={transaction.id}
                className="px-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {transaction.type === "deposit" ? (
                      <ArrowDownCircle className="h-6 w-6 text-green-500" />
                    ) : transaction.type === "withdraw" ? (
                      <ArrowUpCircle className="h-6 w-6 text-red-500" />
                    ) : (
                      <Coins className="h-6 w-6 text-blue-500" />
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
                    transaction.type === "deposit" ? "text-green-600" : 
                    transaction.type === "withdraw" ? "text-red-600" : 
                    "text-blue-600"
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
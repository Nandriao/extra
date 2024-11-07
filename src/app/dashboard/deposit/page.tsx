"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const DepositPage = () => {
  const [amount, setAmount] = useState<string>('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setAmount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with your payment processing system
    console.log('Processing deposit:', amount);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        <Link 
          href="/dashboard/profile"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6"
          tabIndex={0}
          aria-label="Voltar ao perfil"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Link>

        <Card className="p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Fazer um Depósito
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label 
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Valor do Depósito
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  €
                </span>
                <Input
                  id="amount"
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  className="pl-8"
                  placeholder="0.00"
                  aria-label="Valor do depósito"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              aria-label="Confirmar depósito"
            >
              Confirmar Depósito
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default DepositPage; 
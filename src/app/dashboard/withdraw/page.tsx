"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const WithdrawPage = () => {
  const [amount, setAmount] = useState<string>('');
  const [bank, setBank] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');

  const handleWithdraw = () => {
    // Implementation for withdrawal process
    console.log('Withdrawal requested:', { amount, bank, accountNumber });
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and one decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    if (value.split('.').length <= 2) {
      setAmount(value);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        <Link 
          href="/dashboard/profile"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao perfil
        </Link>

        <Card className="p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Levantar Fun
          </h1>

          <div className="grid gap-6">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-gray-900">
                Valor
              </label>
              <Input
                type="text"
                placeholder="Valor"
                value={amount}
                onChange={handleAmountChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-gray-900">
                Banco
              </label>
              <Select
                value={bank}
                onValueChange={setBank}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Selecione o banco" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banco1">Banco 1</SelectItem>
                  <SelectItem value="banco2">Banco 2</SelectItem>
                  <SelectItem value="banco3">Banco 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-sm font-medium text-gray-900">
                Número da Conta
              </label>
              <Input
                type="text"
                placeholder="Número da Conta"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="col-span-3"
              />
            </div>

            <Button onClick={handleWithdraw}>Confirmar</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WithdrawPage; 
"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, Lock, Eye, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  const router = useRouter();

  const [notifications, setNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const [showBalance, setShowBalance] = useState(true);

  const handleLanguageKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // Add language change logic here
    }
  };

  return (
    <div className="py-6 max-w-2xl min-w-screen bg-white">
      <div className="max-w-screen">
        <div className="flex items-center gap-4 mb-6 px-3">
          <Button onClick={() => router.back()} variant="ghost" size="icon" aria-label="Voltar">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900">Configurações</h1>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg px-4 shadow-sm space-y-6">
            <h2 className="text-lg font-medium text-gray-900" id="notifications-heading">Notificações</h2>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gray-500" aria-hidden="true" />
                <div>
                  <p className="text-base text-gray-900" id="notifications-label">Notificações push</p>
                  <p className="text-sm text-gray-500">Receber notificações no dispositivo</p>
                </div>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
                aria-labelledby="notifications-label"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg px-4 shadow-sm space-y-6">
            <h2 className="text-lg font-medium text-gray-900" id="security-heading">Segurança</h2>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-gray-500" aria-hidden="true" />
                <div>
                  <p className="text-base text-gray-900" id="2fa-label">Autenticação de dois fatores</p>
                  <p className="text-sm text-gray-500">Adicionar uma camada extra de segurança</p>
                </div>
              </div>
              <Switch
                checked={twoFactor}
                onCheckedChange={setTwoFactor}
                aria-labelledby="2fa-label"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-gray-500" aria-hidden="true" />
                <div>
                  <p className="text-base text-gray-900" id="balance-label">Mostrar saldo</p>
                  <p className="text-sm text-gray-500">Exibir saldo na tela inicial</p>
                </div>
              </div>
              <Switch
                checked={showBalance}
                onCheckedChange={setShowBalance}
                aria-labelledby="balance-label"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg px-4 shadow-sm space-y-6">
            <h2 className="text-lg font-medium text-gray-900" id="preferences-heading">Preferências</h2>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-gray-500" aria-hidden="true" />
                <div>
                  <p className="text-base text-gray-900" id="language-label">Idioma</p>
                  <p className="text-sm text-gray-500">Português (Brasil)</p>
                </div>
              </div>
              <Button 
                variant="outline"
                aria-labelledby="language-label"
                onKeyDown={handleLanguageKeyDown}
              >
                Alterar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 
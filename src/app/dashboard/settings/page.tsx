"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, Lock, Eye, Globe } from "lucide-react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <div className="min-h-screen py-6 px-3">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/dashboard/profile">
            <Button variant="ghost" size="icon" aria-label="Voltar">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Configurações</h1>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
            <h2 className="text-lg font-medium text-gray-900">Notificações</h2>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-base text-gray-900">Notificações push</p>
                  <p className="text-sm text-gray-500">Receber notificações no dispositivo</p>
                </div>
              </div>
              <Switch />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
            <h2 className="text-lg font-medium text-gray-900">Segurança</h2>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-base text-gray-900">Autenticação de dois fatores</p>
                  <p className="text-sm text-gray-500">Adicionar uma camada extra de segurança</p>
                </div>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-base text-gray-900">Mostrar saldo</p>
                  <p className="text-sm text-gray-500">Exibir saldo na tela inicial</p>
                </div>
              </div>
              <Switch />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
            <h2 className="text-lg font-medium text-gray-900">Preferências</h2>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-base text-gray-900">Idioma</p>
                  <p className="text-sm text-gray-500">Português (Moçambique)</p>
                </div>
              </div>
              <Button variant="outline">Alterar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 
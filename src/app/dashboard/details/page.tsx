"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfileDetailsPage = () => {
  const userProfile = {
    name: "Albino Nandriao",
    phone: "843794444",
    email: "albino@example.com",
    address: "Maputo, Moçambique",
    documentId: "123456789",
    plan: "Gold",
  };

  const router = useRouter();

  return (
    <div className="py-6">
      <div className="max-w-2xl">
        <div className="flex items-center px-3 gap-4 mb-6">
            <Button onClick={() => router.back()} variant="ghost" size="icon" aria-label="Voltar">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          <h1 className="text-xl font-semibold text-gray-900">Detalhes do Perfil</h1>
        </div>

        <div className="space-y-6 px-5">
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Nome completo</p>
            <p className="text-base text-gray-900">{userProfile.name}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">Telefone</p>
            <p className="text-base text-gray-900">{userProfile.phone}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">Plano</p>
            <p className="text-base text-gray-900">{userProfile.plan}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">Endereço</p>
            <p className="text-base text-gray-900">{userProfile.address}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">Documento de Identificação</p>
            <p className="text-base text-gray-900">{userProfile.documentId}</p>
          </div>

          <Button 
            className="w-full mt-6"
            aria-label="Editar perfil"
          >
            Editar Informações
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsPage; 
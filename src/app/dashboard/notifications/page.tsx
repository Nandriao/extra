"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotificationsPage: React.FC = () => {
  const router = useRouter();
  const [notifications, setNotifications] = useState<Array<{ id: number, subject: string, message: string }>>([]);

  useEffect(() => {
    // Simular a obtenção de notificações de uma API
    const fetchNotifications = async () => {
      // Substitua por uma chamada de API real
      const data = [
        { id: 1, subject: 'Nova Mensagem', message: 'Você tem uma nova mensagem.' },
        { id: 2, subject: 'Relatório Pronto', message: 'Seu relatório está pronto para visualização.' },
      ];
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="px-3 py-4">
      <div className="flex items-center gap-4 mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBack}
          aria-label="Voltar para página anterior"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-semibold">Notificações</h1>
      </div>
      <div className="space-y-4">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className="p-4 bg-white shadow rounded-lg"
            tabIndex={0}
            aria-label={`Notificação: ${notification.subject} - ${notification.message}`}
          >
            <h2 className="text-lg font-semibold">{notification.subject}</h2>
            <p>{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;

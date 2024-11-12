import axios from 'axios';
import { toast } from '@/hooks/use-toast';

export const api = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 60000, // timeout de 60 segundos
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor para tratamento de erros (opcional)
api.interceptors.response.use(
  response => response,
  error => {
    // Check for timeout error
    if (error.code === 'ECONNABORTED') {
        toast({
            title: "Erro",
            description: "Tempo de resposta excedido, por favor, tente novamente mais tarde.",
            variant: "destructive",
          });
    } else {
      // Generic error message for other cases
      toast({
        title: "Erro",
        description: "Ocorreu um erro no seu pedido, tente novamente mais tarde!",
        variant: "destructive",
      });
    }

    return Promise.reject(error);
  }
); 
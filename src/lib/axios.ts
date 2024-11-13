import axios from 'axios';
import { toast } from '@/hooks/use-toast';

const publicRoutes = ['/login', '/register']

export const api = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 60000,
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

api.interceptors.request.use(
  (config) => {
    // Skip token verification for public routes
    const isPublicRoute = publicRoutes.some(route => config.url?.includes(route))
    if (isPublicRoute) {
      return config
    }

    // Get token from localStorage
    const token = typeof window !== 'undefined' ? localStorage.getItem('@extra_user_token') : null
    
    // If no token is found, reject the request
    if (!token) {
      return Promise.reject(new Error('No authentication token found'))
    }

    // Add token to request headers
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
) 
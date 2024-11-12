import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useState, useCallback } from 'react';

interface UseAxiosResponse<T> {
  data: T | null;
  error: AxiosError | null;
  loading: boolean;
  fetchData: (config: AxiosRequestConfig) => Promise<void>;
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export function useAxios<T>(): UseAxiosResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (config: AxiosRequestConfig) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api(config);
      setData(response.data);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, fetchData };
} 
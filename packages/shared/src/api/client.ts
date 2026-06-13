import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

let _client: AxiosInstance | null = null;

export function createApiClient(baseURL: string, getToken?: () => string | null): AxiosInstance {
  const client = axios.create({ baseURL });

  client.interceptors.request.use((config) => {
    const token = getToken?.();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  client.interceptors.response.use(
    (res) => res,
    (err) => {
      const status = err.response?.status;
      if (status === 401) {
        // Token expired — apps can handle this via their own interceptor
      }
      return Promise.reject(err);
    },
  );

  _client = client;
  return client;
}

export function getApiClient(): AxiosInstance {
  if (!_client) throw new Error('API client not initialized. Call createApiClient first.');
  return _client;
}

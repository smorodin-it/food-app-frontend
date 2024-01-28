import { z } from 'zod';

export const DEV_ENV_SCHEMA = z.object({
  VITE_DEV_SERVER_PROTOCOL: z.enum(['http', 'https'], {
    required_error: 'Переменная окружения VITE_DEV_SERVER_PROTOCOL не задана',
    invalid_type_error:
      'Переменная окружения VITE_SERVER_PROTOCOL может иметь значения http или https',
  }),
  VITE_DEV_SERVER_DOMAIN: z.string({
    required_error: 'Переменная окружения VITE_DEV_SERVER_DOMAIN не задана',
  }),
  VITE_DEV_SERVER_PORT: z.string({
    required_error: 'Переменная окружения VITE_DEV_SERVER_PORT не задана',
  }),
});

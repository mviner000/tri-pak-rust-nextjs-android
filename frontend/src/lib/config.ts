import { env } from "@/env";

export const API_CONFIG = {
  BASE_URL: env.NEXT_PUBLIC_API_URL,
  AUTH_COOKIE_NAME: 'authToken',
  AUTH_COOKIE_OPTIONS: {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  } as const,
} as const;
import { cookies } from 'next/headers';
import { API_CONFIG } from '../config';

export const authCookies = {
  set: async (token: string, expiresIn?: number) => {
    const cookieStore = await cookies();
    const options = {
      ...API_CONFIG.AUTH_COOKIE_OPTIONS,
      ...(expiresIn && { expires: new Date(Date.now() + expiresIn * 1000) }),
    };
    cookieStore.set(API_CONFIG.AUTH_COOKIE_NAME, token, options);
  },

  get: async () => {
    const cookieStore = await cookies();
    return cookieStore.get(API_CONFIG.AUTH_COOKIE_NAME)?.value;
  },

  remove: async () => {
    const cookieStore = await cookies();
    cookieStore.delete(API_CONFIG.AUTH_COOKIE_NAME);
  },
};
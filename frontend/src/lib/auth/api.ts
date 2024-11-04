// src/lib/auth/api.ts
import { API_CONFIG } from '../config';
import { AuthResult, LoginCredentials, LoginResponse, User } from '@/types';
import { authCookies } from './cookies';

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResult<void>> => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
        }),
      });

      if (!response.ok) {
        return { success: false, error: 'Invalid credentials' };
      }

      const data: LoginResponse = await response.json();
      await authCookies.set(data.access_token, data.expires_in);
      
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Something went wrong' };
    }
  },

  getCurrentUser: async (): Promise<AuthResult<User>> => {
    try {
      const token = await authCookies.get();
      if (!token) {
        return { success: false, error: 'No authentication token' };
      }

      const response = await fetch(`${API_CONFIG.BASE_URL}/user/me`, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        return { success: false, error: 'Failed to fetch user' };
      }

      const user: User = await response.json();
      return { success: true, data: user };
    } catch (error) {
      console.error('Error fetching user:', error);
      return { success: false, error: 'Failed to fetch user data' };
    }
  },

  logout: async (): Promise<AuthResult> => {
    try {
      await authCookies.remove();
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, error: 'Failed to logout' };
    }
  }
};
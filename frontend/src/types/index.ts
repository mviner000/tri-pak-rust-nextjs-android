export interface User {
  id: number;
  email: string;
  username: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface AuthResult<T = void> {
  data?: T;
  error?: string;
  success: boolean;
}
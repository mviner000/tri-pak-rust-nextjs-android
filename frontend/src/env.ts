import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const DEFAULT_API_URL = 'http://127.0.0.1:8080/api/v1';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  },
  
  client: {
    NEXT_PUBLIC_API_URL: z.string().url().default(DEFAULT_API_URL),
  },
  
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});

// Export commonly used derived values
export const isProduction = process.env.NODE_ENV === 'development';
export const API_BASE_URL = env.NEXT_PUBLIC_API_URL;
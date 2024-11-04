import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { API_CONFIG } from './lib/config';

const PUBLIC_PATHS = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get(API_CONFIG.AUTH_COOKIE_NAME);
  
  // Public paths - redirect to home if authenticated
  if (PUBLIC_PATHS.includes(pathname) && authToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // Protected paths - redirect to login if not authenticated
  if (!PUBLIC_PATHS.includes(pathname) && !authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
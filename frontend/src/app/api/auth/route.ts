import { NextRequest, NextResponse } from 'next/server';
import { authApi } from '@/lib/auth/api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const loginResult = await authApi.login({
      username: body.username, // Changed from email to username
      password: body.password,
    });

    if (!loginResult.success) {
      return NextResponse.json(
        { error: loginResult.error },
        { status: 401 }
      );
    }

    // After successful login, fetch user data
    const userResult = await authApi.getCurrentUser();
    
    if (!userResult.success) {
      return NextResponse.json(
        { error: 'Failed to fetch user data' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      user: userResult.data 
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
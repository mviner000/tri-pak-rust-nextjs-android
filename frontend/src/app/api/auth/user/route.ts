import { NextRequest, NextResponse } from 'next/server';
import { authApi } from '@/lib/auth/api';

export async function GET(request: NextRequest) {
  try {
    const result = await authApi.getCurrentUser();

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: result.error === 'No authentication token' ? 401 : 500 }
      );
    }

    return NextResponse.json(result.data);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user data' },
      { status: 500 }
    );
  }
}

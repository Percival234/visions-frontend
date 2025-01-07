import { type NextRequest, NextResponse } from 'next/server';

import { UserRoles } from '@/types/enums/user-roles.enum';

import { authRoutes, mainRoutes } from '@/constants/pages.constant';

import { API_URL } from './constants/server-url.constant';

export default async function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('refresh_token')?.value;

  const isAuthPage = request.url.includes('/auth');

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(mainRoutes.new(), request.url));
  }

  if (!isAuthPage && !refreshToken) {
    return NextResponse.redirect(new URL(authRoutes.signIn(), request.url));
  }

  if (isAuthPage) {
    return NextResponse.next();
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL(authRoutes.signIn(), request.url));
  }

  const isAdminPage = request.url.includes('/admin');

  if (!isAdminPage) {
    return NextResponse.next();
  }

  // TODO короче треба шос ь я щабув но тут треба
  async function getRoles() {
    try {
      const response = await fetch(new URL(`${API_URL}/api/users/roles`), {
        method: 'POST',
        body: JSON.stringify({ refreshToken }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data: { roles: UserRoles[] } = await response.json();

      return data.roles;
    } catch (error) {
      throw error;
    }
  }

  const roles = await getRoles();

  if (!roles || !roles?.includes(UserRoles.Admin)) {
    // TODO зробити нормальний редірект
    return NextResponse.redirect(new URL('/not-found', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/auth/:path*'],
};

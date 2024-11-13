import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicRoutes = ['/', '/login', '/register']

export function middleware(request: NextRequest) {
  const cookieToken = request.cookies.get('auth-token')?.value
  const headerToken = request.headers.get('Authorization')?.replace('Bearer ', '')
  const token = cookieToken || headerToken
  
  const isPublicRoute = publicRoutes.some(route => request.nextUrl.pathname === route)

  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (token && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
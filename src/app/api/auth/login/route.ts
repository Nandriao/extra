import { userController } from '@/controllers/userController'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const { phone, password } = await request.json()
    const result = await userController.login(phone, password)
    
    const response = NextResponse.json({ 
      success: true,
      user: result.user
    })

    cookies().set('token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400 // 1 day
    })
    
    return response
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    )
  }
} 
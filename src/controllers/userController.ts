import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const userController = {
  // Criar usuário
  async create(data: { name: string; email: string; password: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10)
    
    const user = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    })

    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  },

  // Buscar todos os usuários
  async findAll() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    return users
  },

  // Buscar usuário por ID
  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    return user
  },

  // Atualizar usuário
  async update(id: string, data: { name?: string; email?: string; password?: string }) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10)
    }

    const user = await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    return user
  },

  // Deletar usuário
  async delete(id: string) {
    await prisma.user.delete({
      where: { id },
    })
  },

  // Login
  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      throw new Error('User not found')
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      throw new Error('Invalid password')
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' }
    )

    const { password: _, ...userWithoutPassword } = user
    return { user: userWithoutPassword, token }
  },
} 
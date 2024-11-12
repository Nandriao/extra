import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { phoneNumber, password } = await request.json();

    if (!phoneNumber || !password) {
      return NextResponse.json(
        { error: "Por favor, preencha todos os campos" },
        { status: 400 }
      );
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { phoneNumber: Number(phoneNumber)},
    });

    if (!user) {
      return NextResponse.json(
        { error: "Número de telefone ou senha incorretos" },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Número de telefone ou senha incorretos" },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET!,
      { expiresIn: "15m" }
    );

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Algo deu errado, por favor tente novamente mais tarde" },
      { status: 500 }
    );

    // console.log(error)
  }
} 
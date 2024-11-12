import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { fullName, phoneNumber, password, termsAccepted } = await request.json();

    if (!fullName || !phoneNumber || !password || !termsAccepted) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { phoneNumber: Number(phoneNumber) },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Número de telefone já cadastrado" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        fullName,
        phoneNumber: Number(phoneNumber),
        password: hashedPassword,
        termsAccepted,
      },
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Algo deu errado, por favor tente novamente mais tarde" },
      { status: 500 }
    );

    // console.log(error)
  }
} 
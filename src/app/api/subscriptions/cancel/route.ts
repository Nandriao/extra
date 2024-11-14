import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

import { verify } from "jsonwebtoken";
import { SubscriptionStatus } from "@prisma/client";

// Tipo para os dados do usuário no token
interface TokenPayload {
  userId: string;
  iat: number;
  exp: number;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { error: "Token não fornecido" },
        { status: 401 }
      );
    }

    // Verify and decode token
    const decoded = verify(token, process.env.JWT_SECRET!) as TokenPayload;

    // console.log(decoded);

    // Buscar o usuário real do banco de dados
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.userId,
      },
    });

    // console.log(user);

    if (!user) {
      console.log("Usuário não encontrado");

      return NextResponse.json(
        { error: "Algo deu errado, tente novamente mais tarde" },
        { status: 401 }
      );
    }

    await prisma.subscription.update({
      where: {
        id: user.id
      },
      data: {
        status: SubscriptionStatus.CANCELLED,
        updatedAt: new Date()
      }
    });

    return NextResponse.json(
      { message: "Assinatura cancelada com sucesso" },
      { status: 200 }
    );
    
  } catch (error) {
    // console.error("Erro ao cancelar assinatura:", error);
    return NextResponse.json(
      { error: "Erro interno ao cancelar assinatura" },
      { status: 500 }
    );
  }
} 
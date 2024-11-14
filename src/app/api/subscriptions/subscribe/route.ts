import { NextResponse } from "next/server";
import { subscriptionService } from "@/services/subscription.service";

import { verify } from "jsonwebtoken";
import { prisma } from "../../../../lib/prisma";

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

    const { planId, autoRenew } = await req.json();

    if (!planId) {
      return NextResponse.json(
        { error: "Plan ID is required" },
        { status: 400 }
      );
    }

    const subscription = await subscriptionService.subscribe({
      userId: user.id,
      planId,
      autoRenew: false,
    });

    return NextResponse.json({
      message: "Subscription created successfully",
      data: subscription
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: error.response.data.error },
      { status: 400 }
    );
  }
} 
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const plans = await prisma.plan.findMany({
      include: {
        benefits: {
          include: {
            benefit: true
          }
        }
      }
    });

    if (!plans.length) {
      return NextResponse.json(
        { message: "Nenhum plano encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { plans },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao buscar planos:", error);
    return NextResponse.json(
      { error: "Erro interno ao buscar planos" },
      { status: 500 }
    );
  }
} 
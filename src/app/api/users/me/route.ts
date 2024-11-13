import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { prisma } from "../../../../lib/prisma";

// Tipo para os dados do usuário no token
interface TokenPayload {
  userId: string;
  iat: number;
  exp: number;
}

export async function POST(request: Request) {
  try {
    // Get token from request body
    const body = await request.json();
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
      select: {
        id: true,
        fullName: true,
        phoneNumber: true,
      },
    });

    // console.log(user);

    if (!user) {
      console.log("Usuário não encontrado");

      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Token inválido" }, { status: 401 });
  }
}

import { jwtVerify } from "jose";
import { cookies } from "next/headers";

interface AuthResult {
  success: boolean;
  userId?: string;
  error?: string;
}

export async function verifyAuth(request: Request): Promise<AuthResult> {
  try {
    // Primeiro tenta pegar o token do header Authorization
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      // Tenta pegar o token dos cookies como fallback
      const cookieStore = cookies();
      const tokenFromCookie = cookieStore.get("token")?.value;
      
      if (!tokenFromCookie) {
        return { 
          success: false, 
          error: "Token não encontrado no header ou cookie" 
        };
      }
      
      return await verifyToken(tokenFromCookie);
    }

    const token = authHeader.split(" ")[1];
    return await verifyToken(token);

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Token inválido",
    };
  }
}

// Função auxiliar para verificar o token
async function verifyToken(token: string): Promise<AuthResult> {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET não está configurado");
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    if (!payload.userId || typeof payload.userId !== 'string') {
      return { 
        success: false, 
        error: "Payload do token inválido" 
      };
    }

    return {
      success: true,
      userId: payload.userId,
    };
  } catch (error) {
    return {
      success: false,
      error: "Token inválido ou expirado",
    };
  }
}

// Optional: Helper function to get the current user's ID from the token
export async function getCurrentUserId(request: Request): Promise<string | null> {
  const authResult = await verifyAuth(request);
  return authResult.success ? authResult.userId! : null;
} 
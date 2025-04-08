import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default-secret";

interface AuthPayload {
  userId: number;
  email: string;
}

export const isAuthenticated: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "Token não informado" });
    return;
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AuthPayload;
    // @ts-ignore
    req.user = decoded;
    next(); // ✅ continua o fluxo
  } catch (err) {
    res.status(401).json({ message: "Token inválido ou expirado" });
  }
};

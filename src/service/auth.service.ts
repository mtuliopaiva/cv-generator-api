import { prisma } from "../infra/prisma/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return null;

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) return null;

  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  const { password: _, ...userWithoutPassword } = user;
  return { token, user: userWithoutPassword };
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const findByEmail = (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

import { prisma } from "../infra/prisma/prismaClient";

export const getAllUsers = () => {
  return prisma.user.findMany();
};

export const findUserById = (id: number) => {
  return prisma.user.findUnique({ where: { id } });
};

export const createUser = (name: string, email: string, password: string) => {
  return prisma.user.create({
    data: { name, email, password },
  });
};

export const updateUser = (id: number, name: string, email: string) => {
  return prisma.user.update({
    where: { id },
    data: { name, email },
  });
};

export const deleteUser = (id: number) => {
  return prisma.user.delete({ where: { id } });
};

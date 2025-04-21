import { prisma } from "../infra/prisma/prismaClient";

export const create = (userId: number, data: any) => {
  return prisma.resumeContent.create({
    data: {
      ...data,
      userId,
    },
  });
};

export const getByUserId = (userId: number) => {
  return prisma.resumeContent.findUnique({ where: { userId } });
};

export const updateOrCreate = async (userId: number, data: any) => {
  const existing = await prisma.resumeContent.findUnique({ where: { userId } });

  if (existing) {
    return prisma.resumeContent.update({
      where: { userId },
      data,
    });
  }

  return prisma.resumeContent.create({
    data: { ...data, userId },
  });
};

export const remove = (userId: number) => {
  return prisma.resumeContent.delete({
    where: { userId },
  });
};

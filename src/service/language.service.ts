import { prisma } from "../infra/prisma/prismaClient";

export const create = (userId: number, data: any) => {
  return prisma.language.create({
    data: {
      userId,
      name: data.name,
      level: data.level,
    },
  });
};

export const getByUserId = (userId: number) => {
  return prisma.language.findMany({
    where: { userId },
  });
};

export const update = (languageId: number, data: any) => {
  return prisma.language.update({
    where: { id: languageId },
    data: {
      name: data.name,
      level: data.level,
    },
  });
};

export const remove = (languageId: number) => {
  return prisma.language.delete({
    where: { id: languageId },
  });
};

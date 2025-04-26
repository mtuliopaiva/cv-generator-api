import { prisma } from "../infra/prisma/prismaClient";

export const create = (userId: number, data: any) => {
  return prisma.formation.create({
    data: {
      userId,
      institution: data.institution,
      course: data.course,
      startDate: data.startDate ? new Date(data.startDate) : undefined,
      endDate: data.endDate ? new Date(data.endDate) : undefined,
    },
  });
};

export const getByUserId = (userId: number) => {
  return prisma.formation.findMany({
    where: { userId },
  });
};

export const update = (formationId: number, data: any) => {
  return prisma.formation.update({
    where: { id: formationId },
    data: {
      institution: data.institution,
      course: data.course,
      startDate: data.startDate ? new Date(data.startDate) : undefined,
      endDate: data.endDate ? new Date(data.endDate) : undefined,
    },
  });
};

export const remove = (formationId: number) => {
  return prisma.formation.delete({
    where: { id: formationId },
  });
};

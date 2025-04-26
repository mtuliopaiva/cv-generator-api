import { prisma } from "../infra/prisma/prismaClient";

export const create = (userId: number, data: any) => {
  return prisma.experience.create({
    data: {
      userId,
      company: data.company,
      role: data.role,
      startDate: data.startDate ? new Date(data.startDate) : undefined,
      endDate: data.endDate ? new Date(data.endDate) : undefined,
      responsibilities: data.responsibilities,
    },
  });
};

export const getByUserId = (userId: number) => {
  return prisma.experience.findMany({
    where: { userId },
  });
};

export const update = (experienceId: number, data: any) => {
  return prisma.experience.update({
    where: { id: experienceId },
    data: {
      company: data.company,
      role: data.role,
      startDate: data.startDate ? new Date(data.startDate) : undefined,
      endDate: data.endDate ? new Date(data.endDate) : undefined,
      responsibilities: data.responsibilities,
    },
  });
};

export const remove = (experienceId: number) => {
  return prisma.experience.delete({
    where: { id: experienceId },
  });
};

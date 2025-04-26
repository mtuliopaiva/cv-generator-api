import { prisma } from "../infra/prisma/prismaClient";

export const createResume = (
  userId: number,
  title: string,
  templateId?: number
) => {
  return prisma.resume.create({
    data: {
      userId,
      title,
      templateId,
    },
  });
};

export const getResumesByUser = (userId: number) => {
  return prisma.resume.findMany({
    where: { userId },
    include: { template: true },
  });
};

export const updateResume = (
  resumeId: number,
  title: string,
  templateId?: number
) => {
  return prisma.resume.update({
    where: { id: resumeId },
    data: {
      title,
      templateId,
    },
  });
};

export const deleteResume = (resumeId: number) => {
  return prisma.resume.delete({
    where: { id: resumeId },
  });
};

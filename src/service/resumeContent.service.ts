import { prisma } from "../infra/prisma/prismaClient";

export const create = (userId: number, data: any) => {
  return prisma.resumeContent.create({
    data: {
      userId,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      objective: data.objective,
      summary: data.summary,
      keywords: data.keywords,
      techSkills: data.techSkills,
    },
  });
};

export const getByUserId = (userId: number) => {
  return prisma.resumeContent.findUnique({
    where: { userId },
  });
};

export const updateOrCreate = async (userId: number, data: any) => {
  const existing = await getByUserId(userId);

  if (existing) {
    return prisma.resumeContent.update({
      where: { userId },
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        objective: data.objective,
        summary: data.summary,
        keywords: data.keywords,
        techSkills: data.techSkills,
      },
    });
  }

  return create(userId, data);
};

export const remove = (userId: number) => {
  return prisma.resumeContent.delete({
    where: { userId },
  });
};

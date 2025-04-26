import { prisma } from "../infra/prisma/prismaClient";

interface TemplateData {
  title: string;
  content: string;
}

export const create = (data: TemplateData) => {
  return prisma.template.create({
    data,
  });
};

export const getAll = () => {
  return prisma.template.findMany();
};

export const update = (templateId: number, data: TemplateData) => {
  return prisma.template.update({
    where: { id: templateId },
    data,
  });
};

export const remove = (templateId: number) => {
  return prisma.template.delete({
    where: { id: templateId },
  });
};

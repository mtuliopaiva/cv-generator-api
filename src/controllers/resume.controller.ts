import { Request, Response } from "express";
import * as resumeContentService from "../service/resume.service";

export const createResumeContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = Number(req.params.userId);
  const data = req.body;

  const existing = await resumeContentService.getByUserId(userId);
  if (existing) {
    res
      .status(409)
      .json({ message: "ResumeContent já existe para este usuário" });
    return;
  }

  const created = await resumeContentService.create(userId, data);
  res.status(201).json(created);
};

export const deleteResumeContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = Number(req.params.userId);
  await resumeContentService.remove(userId);
  res.status(204).send();
};

export const getResumeContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = Number(req.params.userId);
  const content = await resumeContentService.getByUserId(userId);

  if (!content) {
    res.status(404).json({ message: "Conteúdo não encontrado" });
    return;
  }

  res.status(200).json(content);
};

export const updateResumeContent = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const data = req.body;
  const updated = await resumeContentService.updateOrCreate(userId, data);
  res.status(200).json(updated);
};

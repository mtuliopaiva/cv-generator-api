import { Request, Response } from "express";
import * as resumeService from "../service/resume.service";

export const createResume = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = Number(req.params.userId);
  const { title, templateId } = req.body;

  const created = await resumeService.createResume(userId, title, templateId);
  res.status(201).json(created);
};

export const getResumesByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = Number(req.params.userId);

  const resumes = await resumeService.getResumesByUser(userId);

  res.status(200).json(resumes);
};

export const updateResume = async (
  req: Request,
  res: Response
): Promise<void> => {
  const resumeId = Number(req.params.resumeId);
  const { title, templateId } = req.body;

  const updated = await resumeService.updateResume(resumeId, title, templateId);
  res.status(200).json(updated);
};

export const deleteResume = async (
  req: Request,
  res: Response
): Promise<void> => {
  const resumeId = Number(req.params.resumeId);

  await resumeService.deleteResume(resumeId);
  res.status(204).send();
};

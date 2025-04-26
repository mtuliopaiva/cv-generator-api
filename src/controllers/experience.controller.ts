import { RequestHandler } from "express";
import * as experienceService from "../service/experience.service";

export const createExperience: RequestHandler = async (req, res) => {
  const userId = Number(req.params.userId);
  const data = req.body;

  const created = await experienceService.create(userId, data);
  res.status(201).json(created);
};

export const getExperiencesByUser: RequestHandler = async (req, res) => {
  const userId = Number(req.params.userId);

  const experiences = await experienceService.getByUserId(userId);
  res.status(200).json(experiences);
};

export const updateExperience: RequestHandler = async (req, res) => {
  const experienceId = Number(req.params.experienceId);
  const data = req.body;

  const updated = await experienceService.update(experienceId, data);
  res.status(200).json(updated);
};

export const deleteExperience: RequestHandler = async (req, res) => {
  const experienceId = Number(req.params.experienceId);

  await experienceService.remove(experienceId);
  res.status(204).send();
};

import { RequestHandler } from "express";
import * as templateService from "../service/template.service";

export const createTemplate: RequestHandler = async (req, res) => {
  const { title, content } = req.body;

  const created = await templateService.create({ title, content });
  res.status(201).json(created);
};

export const getAllTemplates: RequestHandler = async (_req, res) => {
  const templates = await templateService.getAll();
  res.status(200).json(templates);
};

export const updateTemplate: RequestHandler = async (req, res) => {
  const templateId = Number(req.params.templateId);
  const { title, content } = req.body;

  const updated = await templateService.update(templateId, { title, content });
  res.status(200).json(updated);
};

export const deleteTemplate: RequestHandler = async (req, res) => {
  const templateId = Number(req.params.templateId);

  await templateService.remove(templateId);
  res.status(204).send();
};

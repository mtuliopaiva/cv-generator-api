import { RequestHandler } from "express";
import * as languageService from "../service/language.service";

export const createLanguage: RequestHandler = async (req, res) => {
  const userId = Number(req.params.userId);
  const data = req.body;

  const created = await languageService.create(userId, data);
  res.status(201).json(created);
};

export const getLanguagesByUser: RequestHandler = async (req, res) => {
  const userId = Number(req.params.userId);

  const languages = await languageService.getByUserId(userId);
  res.status(200).json(languages);
};

export const updateLanguage: RequestHandler = async (req, res) => {
  const languageId = Number(req.params.languageId);
  const data = req.body;

  const updated = await languageService.update(languageId, data);
  res.status(200).json(updated);
};

export const deleteLanguage: RequestHandler = async (req, res) => {
  const languageId = Number(req.params.languageId);

  await languageService.remove(languageId);
  res.status(204).send();
};

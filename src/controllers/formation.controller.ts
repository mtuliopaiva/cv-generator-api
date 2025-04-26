import { RequestHandler } from "express";
import * as formationService from "..//service/formation.service";

export const createFormation: RequestHandler = async (req, res) => {
  const userId = Number(req.params.userId);
  const data = req.body;

  const created = await formationService.create(userId, data);
  res.status(201).json(created);
};

export const getFormationsByUser: RequestHandler = async (req, res) => {
  const userId = Number(req.params.userId);

  const formations = await formationService.getByUserId(userId);
  res.status(200).json(formations);
};

export const updateFormation: RequestHandler = async (req, res) => {
  const formationId = Number(req.params.formationId);
  const data = req.body;

  const updated = await formationService.update(formationId, data);
  res.status(200).json(updated);
};

export const deleteFormation: RequestHandler = async (req, res) => {
  const formationId = Number(req.params.formationId);

  await formationService.remove(formationId);
  res.status(204).send();
};

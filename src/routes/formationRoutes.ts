import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware";
import {
  createFormation,
  deleteFormation,
  getFormationsByUser,
  updateFormation,
} from "../controllers/formation.controller";

export const formationRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Formation
 *   description: Gerenciamento de formações acadêmicas do usuário
 */

/**
 * @swagger
 * /formation/{userId}:
 *   post:
 *     summary: Cria uma nova formação para o usuário
 *     tags: [Formation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - institution
 *               - course
 *             properties:
 *               institution:
 *                 type: string
 *               course:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Formação criada com sucesso
 */
formationRoutes.post("/:userId", isAuthenticated, createFormation);

/**
 * @swagger
 * /formation/{userId}:
 *   get:
 *     summary: Lista as formações do usuário
 *     tags: [Formation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Lista de formações retornada com sucesso
 */
formationRoutes.get("/:userId", isAuthenticated, getFormationsByUser);

/**
 * @swagger
 * /formation/{formationId}:
 *   put:
 *     summary: Atualiza uma formação
 *     tags: [Formation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: formationId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da formação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               institution:
 *                 type: string
 *               course:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Formação atualizada com sucesso
 */
formationRoutes.put("/:formationId", isAuthenticated, updateFormation);

/**
 * @swagger
 * /formation/{formationId}:
 *   delete:
 *     summary: Deleta uma formação
 *     tags: [Formation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: formationId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da formação
 *     responses:
 *       204:
 *         description: Formação removida com sucesso
 */
formationRoutes.delete("/:formationId", isAuthenticated, deleteFormation);

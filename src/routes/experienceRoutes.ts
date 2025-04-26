import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware";
import {
  createExperience,
  deleteExperience,
  getExperiencesByUser,
  updateExperience,
} from "../controllers/experience.controller";

export const experienceRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Experience
 *   description: Gerenciamento de experiências profissionais do usuário
 */

/**
 * @swagger
 * /experience/{userId}:
 *   post:
 *     summary: Cria uma nova experiência para o usuário
 *     tags: [Experience]
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
 *               - company
 *               - role
 *               - responsibilities
 *             properties:
 *               company:
 *                 type: string
 *               role:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *               responsibilities:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Experiência criada com sucesso
 */
experienceRoutes.post("/:userId", isAuthenticated, createExperience);

/**
 * @swagger
 * /experience/{userId}:
 *   get:
 *     summary: Lista as experiências do usuário
 *     tags: [Experience]
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
 *         description: Lista de experiências retornada com sucesso
 */
experienceRoutes.get("/:userId", isAuthenticated, getExperiencesByUser);

/**
 * @swagger
 * /experience/{experienceId}:
 *   put:
 *     summary: Atualiza uma experiência
 *     tags: [Experience]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: experienceId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da experiência
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               company:
 *                 type: string
 *               role:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *               responsibilities:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Experiência atualizada com sucesso
 */
experienceRoutes.put("/:experienceId", isAuthenticated, updateExperience);

/**
 * @swagger
 * /experience/{experienceId}:
 *   delete:
 *     summary: Deleta uma experiência
 *     tags: [Experience]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: experienceId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da experiência
 *     responses:
 *       204:
 *         description: Experiência removida com sucesso
 */
experienceRoutes.delete("/:experienceId", isAuthenticated, deleteExperience);

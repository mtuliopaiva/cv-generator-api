import { Router } from "express";
import {
  createResume,
  deleteResume,
  getResumesByUser,
  updateResume,
} from "../controllers/resume.controller";
import { isAuthenticated } from "../middlewares/auth.middleware";

export const resumeRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Resume
 *   description: Gerenciamento dos currículos (vinculados ao usuário e templates)
 */

/**
 * @swagger
 * /resume/{userId}:
 *   post:
 *     summary: Cria um novo currículo para o usuário
 *     tags: [Resume]
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
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               templateId:
 *                 type: integer
 *                 nullable: true
 *     responses:
 *       201:
 *         description: Currículo criado com sucesso
 */
resumeRoutes.post("/:userId", isAuthenticated, createResume);

/**
 * @swagger
 * /resume/{userId}:
 *   get:
 *     summary: Lista todos os currículos de um usuário
 *     tags: [Resume]
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
 *         description: Lista de currículos encontrados
 */
resumeRoutes.get("/:userId", isAuthenticated, getResumesByUser);

/**
 * @swagger
 * /resume/{resumeId}:
 *   put:
 *     summary: Atualiza o título ou template de um currículo
 *     tags: [Resume]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: resumeId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do currículo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               templateId:
 *                 type: integer
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Currículo atualizado com sucesso
 */
resumeRoutes.put("/:resumeId", isAuthenticated, updateResume);

/**
 * @swagger
 * /resume/{resumeId}:
 *   delete:
 *     summary: Deleta um currículo do usuário
 *     tags: [Resume]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: resumeId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do currículo
 *     responses:
 *       204:
 *         description: Currículo deletado com sucesso
 */
resumeRoutes.delete("/:resumeId", isAuthenticated, deleteResume);

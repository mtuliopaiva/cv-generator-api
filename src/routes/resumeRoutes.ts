import { Router } from "express";
import {
  createResumeContent,
  deleteResumeContent,
  getResumeContent,
  updateResumeContent,
} from "../controllers/resume.controller";
import { isAuthenticated } from "../middlewares/auth.middleware";

export const resumeContentRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: ResumeContent
 *   description: Informações principais do currículo (nome, objetivo, resumo etc.)
 */

/**
 * @swagger
 * /resume/{userId}:
 *   post:
 *     summary: Cria informações do currículo
 *     tags: [ResumeContent]
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
 *               - fullName
 *               - email
 *               - phone
 *               - objective
 *               - summary
 *               - keywords
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               objective:
 *                 type: string
 *               summary:
 *                 type: string
 *               keywords:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Criado com sucesso
 *       409:
 *         description: Já existe conteúdo para este usuário
 */
resumeContentRoutes.post("/:userId", createResumeContent);

/**
 * @swagger
 * /resume/{userId}:
 *   get:
 *     summary: Retorna os dados principais do currículo do usuário
 *     tags: [ResumeContent]
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
 *         description: Dados encontrados
 *       404:
 *         description: Conteúdo não encontrado
 */
resumeContentRoutes.get("/:userId", getResumeContent);

/**
 * @swagger
 * /resume/{userId}:
 *   put:
 *     summary: Atualiza ou cria os dados principais do currículo
 *     tags: [ResumeContent]
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
 *               - fullName
 *               - email
 *               - phone
 *               - objective
 *               - summary
 *               - keywords
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               objective:
 *                 type: string
 *               summary:
 *                 type: string
 *               keywords:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Conteúdo atualizado ou criado
 */
resumeContentRoutes.put("/:userId", updateResumeContent);

/**
 * @swagger
 * /resume/{userId}:
 *   delete:
 *     summary: Remove as informações do currículo do usuário
 *     tags: [ResumeContent]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Conteúdo removido com sucesso
 *       404:
 *         description: ResumeContent não encontrado
 */
resumeContentRoutes.delete("/:userId", deleteResumeContent);

import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware";
import {
  createResumeContent,
  deleteResumeContent,
  getResumeContent,
  updateResumeContent,
} from "../controllers/resumeContent.controller";

export const resumeContentRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: ResumeContent
 *   description: Informações principais do currículo (nome, objetivo, resumo etc.)
 */

/**
 * @swagger
 * /resume-content/{userId}:
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
 *               - techSkills
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
 *               techSkills:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Criado com sucesso
 *       409:
 *         description: Já existe conteúdo para este usuário
 */
resumeContentRoutes.post("/:userId", isAuthenticated, createResumeContent);

/**
 * @swagger
 * /resume-content/{userId}:
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
resumeContentRoutes.get("/:userId", isAuthenticated, getResumeContent);

/**
 * @swagger
 * /resume-content/{userId}:
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
 *               techSkills:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Conteúdo atualizado ou criado
 */
resumeContentRoutes.put("/:userId", isAuthenticated, updateResumeContent);

/**
 * @swagger
 * /resume-content/{userId}:
 *   delete:
 *     summary: Remove as informações do currículo do usuário
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
 *       204:
 *         description: Conteúdo removido com sucesso
 */
resumeContentRoutes.delete("/:userId", isAuthenticated, deleteResumeContent);

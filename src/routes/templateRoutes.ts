import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware";
import {
  createTemplate,
  deleteTemplate,
  getAllTemplates,
  updateTemplate,
} from "../controllers/template.controller";

export const templateRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Template
 *   description: Gerenciamento dos templates de currículo (HTML base para preenchimento)
 */

/**
 * @swagger
 * /template:
 *   post:
 *     summary: Cria um novo template de currículo
 *     tags: [Template]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *                 description: HTML do template com placeholders
 *     responses:
 *       201:
 *         description: Template criado com sucesso
 */
templateRoutes.post("/", isAuthenticated, createTemplate);

/**
 * @swagger
 * /template:
 *   get:
 *     summary: Lista todos os templates disponíveis
 *     tags: [Template]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de templates
 */
templateRoutes.get("/", isAuthenticated, getAllTemplates);

/**
 * @swagger
 * /template/{templateId}:
 *   put:
 *     summary: Atualiza um template de currículo
 *     tags: [Template]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do template
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Template atualizado com sucesso
 */
templateRoutes.put("/:templateId", isAuthenticated, updateTemplate);

/**
 * @swagger
 * /template/{templateId}:
 *   delete:
 *     summary: Deleta um template de currículo
 *     tags: [Template]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do template
 *     responses:
 *       204:
 *         description: Template deletado com sucesso
 */
templateRoutes.delete("/:templateId", isAuthenticated, deleteTemplate);

import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware";
import {
  createLanguage,
  deleteLanguage,
  getLanguagesByUser,
  updateLanguage,
} from "../controllers/language.controller";

export const languageRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Language
 *   description: Gerenciamento de idiomas do usuário
 */

/**
 * @swagger
 * /language/{userId}:
 *   post:
 *     summary: Cria um novo idioma para o usuário
 *     tags: [Language]
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
 *               - name
 *               - level
 *             properties:
 *               name:
 *                 type: string
 *               level:
 *                 type: string
 *     responses:
 *       201:
 *         description: Idioma criado com sucesso
 */
languageRoutes.post("/:userId", isAuthenticated, createLanguage);

/**
 * @swagger
 * /language/{userId}:
 *   get:
 *     summary: Lista os idiomas do usuário
 *     tags: [Language]
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
 *         description: Lista de idiomas retornada com sucesso
 */
languageRoutes.get("/:userId", isAuthenticated, getLanguagesByUser);

/**
 * @swagger
 * /language/{languageId}:
 *   put:
 *     summary: Atualiza um idioma
 *     tags: [Language]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: languageId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do idioma
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               level:
 *                 type: string
 *     responses:
 *       200:
 *         description: Idioma atualizado com sucesso
 */
languageRoutes.put("/:languageId", isAuthenticated, updateLanguage);

/**
 * @swagger
 * /language/{languageId}:
 *   delete:
 *     summary: Deleta um idioma
 *     tags: [Language]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: languageId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do idioma
 *     responses:
 *       204:
 *         description: Idioma removido com sucesso
 */
languageRoutes.delete("/:languageId", isAuthenticated, deleteLanguage);

//backend\routes\Articulos.js
const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articulosController');

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Obtiene todos los artículos
 *     responses:
 *       200:
 *         description: Lista de artículos
 */
router.get('/', articlesController.getAllArticles);

/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Obtiene un artículo por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del artículo
 *     responses:
 *       200:
 *         description: Artículo obtenido con éxito
 */
router.get('/:id', articlesController.getArticleById);

/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Crea un nuevo artículo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       201:
 *         description: Artículo creado con éxito
 */
router.post('/', articlesController.createArticle);

/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Actualiza un artículo existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del artículo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       200:
 *         description: Artículo actualizado con éxito
 */
router.put('/:id', articlesController.updateArticle);

/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Elimina un artículo por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del artículo a eliminar
 *     responses:
 *       200:
 *         description: Artículo eliminado con éxito
 */
router.delete('/:id', articlesController.deleteArticle);

module.exports = router;

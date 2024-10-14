//backend\controllers\articulosController.js

const Article = require('../models/Articulos');

// Obtener todos los artículos
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los artículos' });
  }
};

// Obtener un solo artículo por ID
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Artículo no encontrado' });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el artículo' });
  }
};

// Crear un nuevo artículo
exports.createArticle = async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el artículo' });
  }
};

// Actualizar un artículo existente
exports.updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedArticle) return res.status(404).json({ message: 'Artículo no encontrado' });
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el artículo' });
  }
};

// Eliminar un artículo
exports.deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle) return res.status(404).json({ message: 'Artículo no encontrado' });
    res.status(200).json({ message: 'Artículo eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el artículo' });
  }
};

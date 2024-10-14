//backend\models\Articulos.js
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  videoUrl: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      },
      message: props => `${props.value} no es una URL válida!`
    }
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', articleSchema);

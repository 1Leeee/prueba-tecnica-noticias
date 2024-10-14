import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const ArticuloLista = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/articles')
      .then(response => {
        setArticulos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los artículos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Noticias</h1>
      <div className="article-list">
        {articulos.map(articulo => (
          <div className="article-item" key={articulo._id}>
            <img src={articulo.imageUrl} alt={articulo.title} className="article-image" />
            <h2 className="article-title">{articulo.title}</h2>
            <p className="article-description">{articulo.description}</p>
            <Link to={`/articulos/${articulo._id}`} className="article-link">Leer más</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticuloLista;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../App.css'; // Importa los estilos

const ArticuloDetalle = () => {
  const { id } = useParams();
  const [articulo, setArticulo] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/articles/${id}`)
      .then(response => {
        setArticulo(response.data);
      })
      .catch(error => {
        console.error('Error al obtener el artículo:', error);
      });
  }, [id]);

  if (!articulo) {
    return <p>Cargando artículo...</p>;
  }

  return (
    <div className="article-detail">
      <h1>{articulo.title}</h1>
      <div className="article-media">
        <img src={articulo.imageUrl} alt={articulo.title} />
        <iframe
          src={articulo.videoUrl}
          title={articulo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p>{articulo.description}</p>
      {/* Enlace de regreso a la lista principal */}
      <Link to="/" className="back-link">Volver a la lista</Link>
    </div>
  );
};

export default ArticuloDetalle;

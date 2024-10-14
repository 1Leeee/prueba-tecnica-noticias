const mongoose = require('mongoose');
const Article = require('./models/Articulos'); // Ruta hacia el modelo
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config();

// Conectar a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch((error) => {
  console.log('Error conectando a MongoDB:', error.message);
});

// Los 10 artículos para insertar
const articles = [
  {
    title: "¡Así utilizan las IA para estafar!: La inteligencia artificial aprovechada por delincuentes",
    description: "Daniel Silva realizó un sencillo experimento para mostrar hasta dónde pueden llegar los delincuentes para lograr sus estafas mediante el uso de inteligencia artificial.",
    imageUrl: "https://anatel.cl/cms/wp-content/uploads/2023/07/Meganoticias2x.png",
    videoUrl: "https://www.youtube.com/embed/l7FirWn6uAM"
  },
  {
    title: "Tormenta solar de alta intensidad impacta la tierra: Impactante fenómeno fue visible en Chile",
    description: "La tormenta género lo que es conocido como “auroras australes”, las que fueron visibles en el extremo sur de Chile.",
    imageUrl: "https://anatel.cl/cms/wp-content/uploads/2023/07/Meganoticias2x.png",
    videoUrl: "https://www.youtube.com/embed/uJ52hSv8LXQ"
  },
  {
    title: "Space X cumple su ejercicio más ambicioso: Paso crucial para el futuro de los viajes espaciales",
    description: "La compañía de Elon Musk logró un hito histórico al recuperar el propulsor de Starship.",
    imageUrl: "https://anatel.cl/cms/wp-content/uploads/2023/07/Meganoticias2x.png",
    videoUrl: "https://www.youtube.com/embed/aamZsqme0uo"
  },
  {
    title: "Ejército de Colombia se lanza contra disidentes de las FARC",
    description: "Las fuerzas armadas de Colombia se lanzaron en contra de un grupo de disidentes agrupados en la localidad de El Plateado.",
    imageUrl: "https://anatel.cl/cms/wp-content/uploads/2023/07/Meganoticias2x.png",
    videoUrl: "https://www.youtube.com/embed/sA7Qegumy04"
  },
  {
    title: "Tropas de Corea del Norte en la guerra: La grave acusación de Zelenski",
    description: "El Presidente ucraniano acusó a Rusia de recibir a soldados y material bélico de Corea del Norte en medio de la guerra que mantienen contra su país.",
    imageUrl: "https://anatel.cl/cms/wp-content/uploads/2023/07/Meganoticias2x.png",
    videoUrl: "https://www.youtube.com/embed/kdWMwIDdOzA"
  },
  {
    title: "Violentos enfrentamientos en Perú",
    description: "Manifestantes protestan contra la inseguridad",
    imageUrl: "https://anatel.cl/cms/wp-content/uploads/2023/07/Meganoticias2x.png",
    videoUrl: "https://www.youtube.com/embed/PYa37vEr_u8"
  },
  {
    title: "Detenido hijo de reo fugado desde Colina 1: Mantenía armas y droga",
    description: "La detención se logró en medio de un operativo en búsqueda de José Santos Montecinos, quien se fugó desde Colina 1 habría sido visto junto a su hijo en un vehículo.",
    imageUrl: "https://anatel.cl/cms/wp-content/uploads/2023/07/Meganoticias2x.png",
    videoUrl: "https://www.youtube.com/embed/6QA1P5HTCCM"
  },
  {
    title: "La más moderna de Sudamérica: Así es la nueva cárcel de alta seguridad",
    description: "Se espera que el nuevo recinto penitenciario de Talca comience a operar a fines de este año bajo las más modernas medidas de seguridad en Sudamérica.",
    imageUrl: "https://anatel.cl/cms/wp-content/uploads/2023/07/Meganoticias2x.png",
    videoUrl: "https://www.youtube.com/embed/6PC1QtLiJvQ"
  },
  {
    title: "Joven muere atacado por una turba en plena Alameda: Detenido es colombiano con situación irregular",
    description: "El joven de 29 se desplazaba junto a sus amigos cuando fueron interceptados por un grupo de delincuentes, quienes los asaltaron e hirieron para asaltarlos.",
    imageUrl: "https://anatel.cl/cms/wp-content/uploads/2023/07/Meganoticias2x.png",
    videoUrl: "https://www.youtube.com/embed/usdNgsGU_aQ"
  },
  {
    title: "Estaríamos distorsionando el sistema institucional: Ministro cordero abordó AC contra Muñoz",
    description: "El ministro de Justicia, Luis Cordero, se refirió a las acusaciones constitucionales en contra de Sergio Muñoz y Jean Pierre Matus.",
    imageUrl: "https://anatel.cl/cms/wp-content/uploads/2023/07/Meganoticias2x.png",
    videoUrl: "https://www.youtube.com/embed/ts9epqGU0eY"
  }
];


// Función para insertar artículos en MongoDB
const insertArticles = async () => {
  try {
    await Article.insertMany(articles);
    console.log('Artículos insertados con éxito');
    mongoose.connection.close(); // Cerrar la conexión después de insertar
  } catch (error) {
    console.log('Error insertando los artículos:', error);
  }
};

// Llamar a la función para insertar los artículos
insertArticles();

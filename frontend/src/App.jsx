import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticuloList from "./components/ArticuloLista";;
import ArticuloDetalle from "./components/ArticuloDetalle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticuloList />} />
        <Route path="/articulos/:id" element={<ArticuloDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;

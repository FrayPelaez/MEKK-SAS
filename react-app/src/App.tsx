import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Products from "./pages/products";
import Contact from "./pages/contact";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
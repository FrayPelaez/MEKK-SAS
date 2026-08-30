import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Products from "./pages/products";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />

        <Route
          path="*"
          element={<Navigate to="/productos" replace />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
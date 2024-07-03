import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/contact";

function App() {
  return (
    // Encapsula nuestro componentes y renderiza las rutas
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default (App);
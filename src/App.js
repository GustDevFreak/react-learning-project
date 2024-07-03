import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/contact";
import Profile from "./pages/profile";

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
          <li>
            <Link to="/profile/kevin">Profile</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        {/* Definiendo una ruta dinamica */}
        <Route path="/profile/:name" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App;
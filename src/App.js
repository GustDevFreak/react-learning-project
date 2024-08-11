import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomeScreen } from "./routes/HomeScreen";
import { AboutScreen } from "./routes/AboutScreen";
import { ContactScreen } from "./routes/ContactScreen";
import { UserProvider } from "./context/UserProvider";
import { LoginScreen } from "./routes/LoginScreen";

export default function App() {
  return (
    // Aqui se define el Provider, para que todos los componentes dentro de este app puedan acceder al Context
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="/contact" element={<ContactScreen />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </UserProvider>
  )
}
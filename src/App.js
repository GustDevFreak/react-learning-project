import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomeScreen } from "./routes/HomeScreen";
import { AboutScreen } from "./routes/AboutScreen";
import { ContactScreen } from "./routes/ContactScreen";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="/contact" element={<ContactScreen />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  )
}
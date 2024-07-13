import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import Header from "./components/Header";

export default function App() {
  return (
    <>
        <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="newVideo" element={<NewVideo />} />
    </Routes>
    </>

  );
}

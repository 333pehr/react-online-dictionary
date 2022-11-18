import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/Header";
import Aboutus from "./components/Pages/Aboutus";
import Definition from "./components/Pages/Definition";
import Dictionary from "./components/Pages/Dictionary";
import Notfound404 from "./components/Pages/Notfound404";
function App() {
  return (
    <>
      <div className="bg-slate-300 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Dictionary />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/definition/:search" element={<Definition />} />
          <Route path="*" element={<Notfound404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

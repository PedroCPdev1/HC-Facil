import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../../globals.css";
import Home from "../../routes/Home/index.tsx";
import Header from "../Cabecalho/Header.tsx";
import Footer from "../Rodape/Footer.tsx";
import ConsultaExames from "../../routes/ConsultaExames/index.tsx";
import Contato from "../../routes/Contato/index.tsx";
import Faq from "../../routes/FAQ/index.tsx";
import Guia from "../../routes/Guia/index.tsx";
import Notificacoes from "../../routes/Notificacoes/index.tsx";
import QuemSomos from "../../routes/QuemSomos/index.tsx";
import GuiaSiteHc from "../../routes/Guia/guiaSiteHc.tsx";
import Videos from "../../routes/Guia/Videos/videos.tsx";
import GuiaHcFacil from "../../routes/Guia/guiaHcFacil.tsx";
import Calendario from "../../routes/Calendario/index.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/consultaExames" element={<ConsultaExames />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/guia" element={<Guia />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/guiaSiteHc" element={<GuiaSiteHc />} />
        <Route path="/video/:id" element={<Videos />} />
        <Route path="/guiaHcFacil" element={<GuiaHcFacil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);

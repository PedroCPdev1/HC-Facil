import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/index.css'
import Home from './routes/Home/index.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Calendario from './routes/Calendario/index.tsx'
import ConsultaExames from './routes/ConsultaExames/index.tsx'
import Contato from './routes/Contato/index.tsx'
import Faq from './routes/FAQ/index.tsx'
import Guia from './routes/Guia/index.tsx'
import Notificacoes from './routes/Notificacoes/index.tsx'
import QuemSomos from './routes/QuemSomos/index.tsx'

createRoot(document.getElementById('root')!).render(
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
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
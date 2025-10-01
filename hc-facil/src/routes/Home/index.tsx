import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-[#087bca]">
  <div className="p-6 text-center">
    <h1 className="text-white text-4xl sm:text-4xl lg:text-5xl font-bold mb-2">
      Bem Vindo ao HC Fácil!
    </h1>
    <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
      Pressione a opção desejada
    </p>
  </div>

  <div className="w-full max-w-6xl px-4">
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
      
      <Link to="guia" className="botao-home">
        Guia
      </Link>

      <Link to="calendario" className="botao-home">
        Calendário
      </Link>

      <Link
        to="consultaExames"
        className="bg-white text-[#087bca] font-bold px-8 py-4 rounded-xl shadow-2xl hover:bg-blue-200 transform hover:scale-110 duration-170 transition h-25 w-80 text-3xl"
      >
        Consultas e Exames
      </Link>

      <Link to="notificacoes" className="botao-home">
        Notificações
      </Link>

      <Link to="quemSomos" className="botao-home">
        Quem Somos
      </Link>

      <Link to="faq" className="botao-home">
        FAQ
      </Link>

      <Link to="contato" className="botao-home">
        Contato
      </Link>
    </div>
  </div>
</main>
  );
}

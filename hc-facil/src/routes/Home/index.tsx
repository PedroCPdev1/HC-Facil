import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="p-8 pt-50 text-center ">
        <h1 className="text-white text-5xl font-bold mb-2">
          Bem Vindo ao HC Fácil!
        </h1>
        <p className="text-white text-3xl font-bold mb-2">
          Pressione a opção desejada
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-5 text-center">
          <Link to="guia" className="botao-home">
            Guia
          </Link>
          <Link to="calendario" className="botao-home">
            Calendário
          </Link>
          <Link
            to="consultaExames"
            className="bg-white text-[#087bca] font-bold px-8 py-4 rounded-xl shadow-2xl hover:bg-blue-200 transform hover:scale-110 duration-170 transition h-25 w-80 text-3xl "
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

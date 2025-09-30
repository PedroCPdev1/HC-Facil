import { useState } from "react";

export default function Notificacoes() {
  const [notificacoes, setNotificacoes] = useState([
    "Não se esqueça! Você tem uma consulta marcada para amanhã às (data) no local (hora)",
    "Sua tele consulta se iniciará em 1 hora, fique atento! Já pegue seu telefone e aguarde o Dr.",
    "O Doutor já está esperando! tem alguma dúvida de como ingressar na consulta acesse o GUIA",
  ]);

  function removerNotificacao(idx: number) {
    setNotificacoes((prev) => prev.filter((_, i) => i !== idx));
  }

  return (
    <main className="h-screen flex flex-col items-center bg-[#087bca] px-4 py-12">
      <div className="flex flex-col sm:flex-row items-center gap-4 text-center mb-10">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
          NOTIFICAÇÕES
        </h1>

        <div className="relative inline-block">
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 24c1.3 0 2.4-1 2.4-2.3h-4.8c0 1.3 1.1 2.3 2.4 2.3zm8.4-6v-5c0-3.1-1.7-5.7-4.8-6.4V6.5c0-1.5-1.3-2.7-3-2.7s-3 1.2-3 2.7v.1c-3.1.7-4.8 3.3-4.8 6.4v5l-1.8 1.8v.9h19.2v-.9l-1.8-1.8z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs sm:text-sm font-bold rounded-full h-6 w-6 sm:h-7 sm:w-7 flex items-center justify-center">
            {notificacoes.length}
          </span>
        </div>
      </div>

      <div className="w-full max-w-7xl">
        <nav>
          <ul className="flex flex-col gap-6">
            {notificacoes.map((texto, idx) => (
              <li
                key={idx}
                className="flex flex-row items-center justify-between gap-4 p-4 
                       bg-white rounded-3xl shadow-md text-base sm:text-lg lg:text-2xl
                       transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-row items-center gap-3 text-left">
                  <img
                    src="../../../public/check_box.png"
                    alt="notificacoes"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="break-words">{texto}</span>
                </div>

                <button
                  onClick={() => removerNotificacao(idx)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition text-sm sm:text-base"
                  aria-label="Excluir notificação"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}

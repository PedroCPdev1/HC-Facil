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
    <main className="h-screen flex flex-col items-center">
      <div className="flex flex-row p-8 pt-30 text-center ">
        <h1 className="text-white text-5xl font-bold mb-2">NOTIFICAÇÕES</h1>
        <div className="relative inline-block ml-5 ">
          <svg
            className="w-12 h-12 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 24c1.3 0 2.4-1 2.4-2.3h-4.8c0 1.3 1.1 2.3 2.4 2.3zm8.4-6v-5c0-3.1-1.7-5.7-4.8-6.4V6.5c0-1.5-1.3-2.7-3-2.7s-3 1.2-3 2.7v.1c-3.1.7-4.8 3.3-4.8 6.4v5l-1.8 1.8v.9h19.2v-.9l-1.8-1.8z" />
          </svg>
          <span className="absolute top-0 right-0 bg-red-600 text-white font-bold rounded-full h-7 w-7 flex items-center justify-center">
            {notificacoes.length}
          </span>
        </div>
      </div>

      <div className="flex flex-ro gap-15 justify-center">
        <nav>
          <ul className="flex flex-col gap-10">
            {notificacoes.map((texto, idx) => (
              <li
                key={idx}
                className="flex flex-row gap-2 p-4 w-auto min-w-250 h-auto bg-white rounded-4xl shadow-[0px_10px_5px_rgba(0,0,0,0.2)] justify-center text-3xl text-center items-center transform hover:scale-105 transition-transform duration-300"
              >
                <img src="../../../public/check_box.png" alt="notificacoes" />
                {texto}
                <button
                  onClick={() => removerNotificacao(idx)}
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
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

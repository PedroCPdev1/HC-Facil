export default function Notificacoes() {
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="p-8 pt-30 text-center ">
        <h1 className="text-white text-5xl font-bold mb-2">NOTIFICAÇÕES</h1>
      </div>

      <div className="flex flex-ro gap-15 justify-center">
        <nav>
          <ul className="flex flex-col gap-10">
            <li className="flex flex-row gap-2 p-4 w-auto min-w-250 h-auto bg-white rounded-4xl shadow-[0px_10px_5px_rgba(0,0,0,0.2)] justify-center text-3xl text-center items-center transform hover:scale-105 transition-transform duration-300 ">
              <img src="../../../public/check_box.png" />
              Não se esqueça! Você tem uma consulta marcada para amanhã às
              (data) no local (hora)
            </li>
            <li className="flex flex-row p-4 w-auto min-w-250 h-auto bg-white rounded-4xl shadow-[0px_10px_5px_rgba(0,0,0,0.2)] justify-center text-3xl text-center items-center transform hover:scale-105 transition-transform duration-300">
              <img src="../../../public/check_box.png" alt="notificacoes" />
              Sua tele consulta se iniciará em 1 hora, fique atento! Já pegue
              seu telefone e aguarde o Dr.
            </li>
            <li className="flex flex-r p-4 w-auto min-w-250 h-auto bg-white rounded-4xl shadow-[0px_10px_5px_rgba(0,0,0,0.2)] justify-center text-3xl text-center items-center transform hover:scale-105 transition-transform duration-300 item">
              <img src="../../../public/check_box.png" alt="notificacoes" />O
              Doutor já está esperando! tem alguma dúvida de como ingressar na
              consulta acesse o GUIA{" "}
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

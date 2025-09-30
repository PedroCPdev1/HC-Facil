export default function Contato() {
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="p-8 pt-40 text-center ">
        <h1 className="text-white text-5xl font-bold mb-2">CONTATO</h1>
      </div>
      <div className="flex flex-col bg-white h-110 w-270 mt-10 rounded-4xl gap-5 items-center">
        <h2 className="text-center text-3xl mt-20 font-semibold">
          Caso precise de algum auxílio, pode nos contatar pelos meios abaixo:
        </h2>
        <div className="contato-info">
          <p>Email: faleconosco.hcx@hc.fm.usp.br</p>
        </div>
        <div className="contato-info">
          <p>Telefone: (11) 2661-7025</p>
        </div>
        <div className="contato-info">
          <p>
            Para mais informações acesse:{" "}
            <a
              href="https://hc.unicamp.br/pacientes/telefones-uteis/"
              target="_blank"
              rel="noopener"
              className="text-blue-600 font-bold"
            >
              Telefones e e-mails úteis - Hospital de Clínicas - HC
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function ConsultaExames() {
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="p-8 pt-20 text-center ">
        <h1 className="text-white text-5xl font-bold mb-2">
          CONSULTAS E EXAMES
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-30 place-items-center">
          <div className="flex flex-col gap-5 bg-white p-10 w-auto h-20 rounded-full shadow-2xl justify-center text-center text-[#087bca] font-bold text-2xl">
            <h2>Minhas Consultas</h2>
          </div>
          <div className="flex flex-col gap-5 bg-white p-10 w-auto h-20 rounded-full shadow-2xl justify-center text-center text-[#087bca] font-bold text-2xl">
            <h2>Meus Exames</h2>
          </div>
          <div className="bg-white w-150 h-70 shadow-4xl rounded-4xl text-center pt-5 pb-5">
            <h3 id="titulo" className="text-[#087bca] font-bold text-3xl">
              Teste
            </h3>
            <p id="nomeFacil" className="text-xl italic font-light pt-2">
              (teste)
            </p>
            <p id="horario" className="text-xl pt-4">
              10:00 às 11:00
            </p>
            <p id="descricao" className="text-xl pt-2">
              Teste teste teste teste teste teste
            </p>
            <p id="endereco" className="text-xl text-[#087bca] font-bold pt-4">
              Endereço: Rua x, 444
            </p>
          </div>
          <div className="bg-white w-150 h-70 shadow-2xl rounded-4xl text-center pt-5 pb-">
            <h3 id="titulo" className="text-[#087bca] font-bold text-3xl">
              Teste
            </h3>
            <p id="nomeFacil" className="text-xl italic font-light pt-2">
              (teste)
            </p>
            <p id="horario" className="text-xl pt-4">
              10:00 às 11:00
            </p>
            <p id="descricao" className="text-xl pt-2">
              Teste teste teste teste teste teste
            </p>
            <p id="endereco" className="text-xl text-[#087bca] font-bold pt-4">
              Endereço: Rua x, 444
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ConsultaExames({ dados }) {
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="p-8 pt-20 text-center ">
        <h1 className="text-white text-5xl font-bold mb-2">
          CONSULTAS E EXAMES
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-30 place-items-center">
          <div className="titulo-consulta-exames">
            <h2>Minhas Consultas</h2>
          </div>
          <div className="titulo-consulta-exames">
            <h2>Meus Exames</h2>
          </div>
          <div className="bg-white w-150 h-70 shadow-4xl rounded-4xl text-center pt-5 pb-5">
            <h3 className="text-[#087bca] font-bold text-3xl">
              {dados.especialidade}
            </h3>
            <p className="text-xl italic font-light pt-2">
              {dados.data}
            </p>
            <p className="text-xl pt-4">
              {dados.hora}
            </p>
            <p className="text-xl pt-2">
              {dados.local}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
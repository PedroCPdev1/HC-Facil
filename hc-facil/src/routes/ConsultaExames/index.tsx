export default function ConsultaExames() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#087bca] px-4 py-12">
  {/* Título */}
  <div className="text-center mb-10">
    <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
      CONSULTAS E EXAMES
    </h1>
  </div>

  {/* Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
    
    {/* Coluna Consultas */}
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-2">
        Minhas Consultas
      </h2>

      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
        <h3 className="text-[#087bca] font-bold text-2xl sm:text-3xl">
          Teste
        </h3>
        <p className="text-lg sm:text-xl italic font-light pt-2">(teste)</p>
        <p className="text-lg sm:text-xl pt-4">10:00 às 11:00</p>
        <p className="text-lg sm:text-xl pt-2">
          Teste teste teste teste teste teste
        </p>
        <p className="text-lg sm:text-xl text-[#087bca] font-bold pt-4">
          Endereço: Rua x, 444
        </p>
      </div>
    </div>

    {/* Coluna Exames */}
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-2">
        Meus Exames
      </h2>

      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
        <h3 className="text-[#087bca] font-bold text-2xl sm:text-3xl">
          Teste
        </h3>
        <p className="text-lg sm:text-xl italic font-light pt-2">(teste)</p>
        <p className="text-lg sm:text-xl pt-4">10:00 às 11:00</p>
        <p className="text-lg sm:text-xl pt-2">
          Teste teste teste teste teste teste
        </p>
        <p className="text-lg sm:text-xl text-[#087bca] font-bold pt-4">
          Endereço: Rua x, 444
        </p>
      </div>
    </div>

  </div>
</main>

  );
}

export default function Calendario() {
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="flex flex-col gap-10 pt-25 text-center">
        <div className="gap-5 text-center bg-white w-200 h-200 rounded-3xl drop-shadow-lg shadow-2xl">
          <h1 className="text-[#087bca] text-3xl font-bold mb-2 pt-15">
            Agendar Consulta/Exame
          </h1>
          <div className="flex flex-col gap-5 pt-10">
            <form className="flex flex-col gap-6 text-2xl">
              <label htmlFor="data">Data</label>
              <input
                type="date"
                id="data"
                className="border border-gray-300 rounded-xl p-2 w-180 h-15 mx-auto "
              />
              <label htmlFor="hora">Hora</label>
              <input
                type="time"
                id="hora"
                className="border border-gray-300 rounded-xl p-2 w-180 h-15 mx-auto "
              />
              <label htmlFor="local">Local</label>
              <select
                id="local"
                className="border border-gray-300 rounded-xl p-2 w-180 h-15 mx-auto "
              />
              <label htmlFor="especialidade">Especialidade</label>
              <select
                id="especialidade"
                className="border border-gray-300 rounded-xl p-2 w-180 h-15 mx-auto  "
              />
              <button
                type="submit"
                className="bg-[#087bca] text-white px-6 py-2 rounded-2xl hover:bg-[#005d9b] transition w-180 h-18 mx-auto font-bold">
                AGENDAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

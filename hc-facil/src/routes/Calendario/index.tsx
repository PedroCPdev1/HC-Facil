import { useState } from "react";

export default function Calendario({ onAgendar }) {
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [local, setLocal] = useState("");
  const [especialidade, setEspecialidade] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (data && hora && local && especialidade) {
      onAgendar({ data, hora, local, especialidade });
    }
  }

  const isFormValid = data && hora && local && especialidade;

  return (
    <main className="h-screen flex flex-col items-center">
      <div className="flex flex-col gap-10 pt-25 text-center">
        <div className="gap-5 text-center bg-white w-200 h-200 rounded-3xl drop-shadow-lg shadow-2xl">
          <h1 className="text-[#087bca] text-3xl font-bold mb-2 pt-15">
            Agendar Consulta/Exame
          </h1>
          <div className="flex flex-col gap-5 pt-10">
            <form className="flex flex-col gap-6 text-2xl" onSubmit={handleSubmit}>
              <label htmlFor="data">Data</label>
              <input
                type="date"
                id="data"
                value={data}
                onChange={e => setData(e.target.value)}
                className="border border-gray-300 rounded-xl p-2 w-180 h-15 mx-auto "
              />
              <label htmlFor="hora">Hora</label>
              <input
                type="time"
                id="hora"
                value={hora}
                onChange={e => setHora(e.target.value)}
                className="border border-gray-300 rounded-xl p-2 w-180 h-15 mx-auto "
              />
              <label htmlFor="local">Local</label>
              <select
                id="local"
                value={local}
                onChange={e => setLocal(e.target.value)}
                className="border border-gray-300 rounded-xl p-2 w-180 h-15 mx-auto "
              >
                <option value="">Selecione</option>
                <option value="Hospital">Hospital</option>
                <option value="Clínica">Clínica</option>
              </select>
              <label htmlFor="especialidade">Especialidade</label>
              <select
                id="especialidade"
                value={especialidade}
                onChange={e => setEspecialidade(e.target.value)}
                className="border border-gray-300 rounded-xl p-2 w-180 h-15 mx-auto  "
              >
                <option value="">Selecione</option>
                <option value="Cardiologia">Cardiologia</option>
                <option value="Dermatologia">Dermatologia</option>
              </select>
              <button
                type="submit"
                className={`bg-[#087bca] text-white px-6 py-2 rounded-2xl hover:bg-[#005d9b] transition w-180 h-18 mx-auto font-bold ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!isFormValid}
              >
                AGENDAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
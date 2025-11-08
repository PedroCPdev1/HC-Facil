import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const URL_API = import.meta.env.VITE_API_URL;

export default function Calendario() {
  const [data_consulta, setData] = useState("");
  const [hora_consulta, setHora] = useState("");
  const [local, setLocal] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [loading, setLoading] = useState(false); 

  const notificaSucesso = () => toast.success("Agendamento realizado com sucesso!", {
    position: "bottom-right",
    autoClose: 3000, 
  });;
  
  const notificaErro = () => toast.error("Agendamento nao foi realizado!", {
    position: "bottom-right",
    autoClose: 3000, 
  });;

  async function agendarConsulta(dadosAgendamento: { data_consulta: string; hora_consulta: string; local: string; especialidade: string; }) {
    setLoading(true);
    
    const payload = dadosAgendamento; 

    try {
      const response = await fetch(URL_API, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload), 
      });

      if (response.ok) {
        const resultado = await response.json();
        console.log("Agendamento realizado com sucesso:", resultado);
        notificaSucesso();

        setData("");
        setHora("");
        setLocal("");
        setEspecialidade("");

      } else {
        notificaErro
      }

    } catch (error) {
      console.error("Erro de conexão ou CORS:", error);
      alert("Erro de rede. Verifique se o servidor Quarkus está rodando.");
    } finally {
      setLoading(false);
    }
  }

  function agendar(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if (data_consulta && hora_consulta && local && especialidade) {
      agendarConsulta({ data_consulta, hora_consulta, local, especialidade });
    }
  }

  const isFormValid = data_consulta && hora_consulta && local && especialidade;

  return (
    <main className="h-screen flex flex-col items-center p-4">
      <div className="flex flex-col gap-10 pt-40 text-center scale-150">
        <div className="gap-5 text-center bg-white md:w-[400px] w-full p-8 rounded-3xl drop-shadow-xl shadow-2xl">
          <h1 className="text-[#087bca] text-3xl font-extrabold mb-8">
            Agendar Consulta/Exame
          </h1>
          <div className="flex flex-col gap-5">
            <form className="flex flex-col gap-4 text-lg" onSubmit={agendar}>
              
              <label htmlFor="data" className="font-semibold text-left text-gray-700">Data</label>
              <input
                type="date"
                id="data"
                value={data_consulta}
                onChange={e => setData(e.target.value)}
                className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#087bca] transition duration-150"
              />
              
              <label htmlFor="hora" className="font-semibold text-left text-gray-700">Hora</label>
              <input
                type="time"
                id="hora"
                value={hora_consulta}
                onChange={e => setHora(e.target.value)}
                className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#087bca] transition duration-150"
              />
              
              <label htmlFor="local" className="font-semibold text-left text-gray-700">Local</label>
              <select
                id="local"
                value={local}
                onChange={e => setLocal(e.target.value)}
                className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#087bca] transition duration-150"
              >
                <option value="">Selecione o Local</option>
                <option value="Hospital">Hospital</option>
                <option value="Clínica">Clínica</option>
                <option value="Casa">Casa</option>
              </select>
              
              <label htmlFor="especialidade" className="font-semibold text-left text-gray-700">Especialidade</label>
              <select
                id="especialidade"
                value={especialidade}
                onChange={e => setEspecialidade(e.target.value)}
                className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#087bca] transition duration-150"
              >
                <option value="">Selecione a Especialidade</option>
                <option value="Cardiologia">Cardiologia</option>
                <option value="Dermatologia">Dermatologia</option>
                <option value="Oftalmologia">Oftalmologia</option>
                <option value="Pediatra">Pediatra</option>
                <option value="Otorrino">Otorrino</option>
                <option value="Neurologista">Neurologista</option>
              </select>
              <button
                type="submit"
                className={`mt-6 text-white px-6 py-3 rounded-2xl transition font-bold text-xl 
                  ${!isFormValid || loading 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-[#087bca] hover:bg-[#005d9b]"
                  }`}
                disabled={!isFormValid || loading}
              >
                {loading ? "AGENDANDO..." : "AGENDAR"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
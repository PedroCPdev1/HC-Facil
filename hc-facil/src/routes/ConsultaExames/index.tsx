import type { Consultas } from "../../types/consultas";
import { useState, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const URL_API = import.meta.env.VITE_API_URL; 

interface FormData extends Omit<Consultas, 'id'> {}

interface ModalProps {
  consulta: Consultas;
  onClose: () => void;
  onSave: (id: number, updatedData: FormData) => Promise<void>;
}

const ModalEdicao: React.FC<ModalProps> = ({ consulta, onClose, onSave }) => {
  const [formData, setFormData] = useState<FormData>({
    data_consulta: consulta.data_consulta,
    hora_consulta: consulta.hora_consulta,
    especialidade: consulta.especialidade,
    local: consulta.local,
  });
  const [animateIn, setAnimateIn] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 10);
    return () => clearTimeout(timer);
  }, []); 

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
        await onSave(consulta.id, formData);
    } catch(error) {
    } finally {
        setLoading(false);
        onClose(); 
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 p-4 scale-150">
      <div className={`bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg mx-auto transition-all duration-300 ease-out 
          ${animateIn ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}>
        <h2 className="text-3xl font-extrabold text-[#087bca] mb-6 border-b-2 pb-3">
            Editar Agendamento
        </h2>
        <form className="flex flex-col gap-4 text-lg" onSubmit={handleSave}>
          
          <label htmlFor="data_consulta" className="font-semibold text-left text-gray-700">Data da Consulta</label>
          <input
            type="date"
            id="data_consulta" 
            value={formData.data_consulta}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            required
          />
          
          <label htmlFor="hora_consulta" className="font-semibold text-left text-gray-700">Hora da Consulta</label>
          <input
            type="time"
            id="hora_consulta" 
            value={formData.hora_consulta}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            required
          />
          
          <label htmlFor="local" className="font-semibold text-left text-gray-700">Local</label>
          <select
            id="local"
            value={formData.local}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Hospital">Hospital</option>
            <option value="Clínica">Clínica</option>
          </select>
          
          <label htmlFor="especialidade" className="font-semibold text-left text-gray-700">Especialidade</label>
          <select
            id="especialidade"
            value={formData.especialidade}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Cardiologia">Cardiologia</option>
            <option value="Dermatologia">Dermatologia</option>
            <option value="Oftalmologia">Oftalmologia</option>
            <option value="Pediatra">Pediatra</option>
            <option value="Otorrino">Otorrino</option>
            <option value="Neurologista">Neurologista</option>
          </select>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-5 py-2 rounded-xl hover:bg-gray-400 transition font-semibold"
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={`text-white px-5 py-2 rounded-xl font-bold transition ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
              disabled={loading}
            >
              {loading ? "SALVANDO..." : "SALVAR"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default function ConsultaExames() {
  const [consultas, setConsultas] = useState<Consultas[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consultaSelecionada, setConsultaSelecionada] = useState<Consultas | null>(null);

  const notificaSucessoRemocao = () => toast.success("Agendamento desmarcado com sucesso!", {
      position: "bottom-right",
      autoClose: 3000, 
    });;
    
    const notificaEdicao = () => toast.success("Agendamento alterado com sucesso!", {
      position: "bottom-right",
      autoClose: 3000, 
    });;

  const buscaConsultas = useCallback(async () => {
    try {
      const response = await fetch(URL_API);
      if (!response.ok) {
        throw new Error('Falha ao buscar as Consultas');
      }
      const data: Consultas[] = await response.json();
      setConsultas(data);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Um erro inesperado ocorreu.');
      }
    } 
  }, []);

  useEffect(() => {
    buscaConsultas();
  }, [buscaConsultas]);

  const deletaConsulta = async (id: number) => {
    if (!window.confirm("Tem certeza que deseja cancelar esta consulta?")) {
        return; 
    }

    try {
        const response = await fetch(`${URL_API}/${id}`, {
            method: 'DELETE',
        });

        if (response.ok || response.status === 204) { 
            setConsultas(prevConsultas => 
                prevConsultas.filter(c => c.id !== id)
            );
            notificaSucessoRemocao
        } else {
            throw new Error('Falha na exclusão no servidor.');
        }

    } catch (err) {
        console.error("Erro ao deletar consulta:", err);
        alert("Erro ao deletar consulta. Tente novamente.");
    }
  };
  
  const editarConsulta = async (id: number, updatedData: FormData) => {
    console.log(id, updatedData)
    try {
        const response = await fetch(`${URL_API}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });
console.log(response)
        if (response.ok) { 
            const consultaAtualizada: Consultas = await response.json();

            setConsultas(prevConsultas => 
                prevConsultas.map(c => 
                    c.id === id ? consultaAtualizada : c
                )
            );
            notificaEdicao
        } else {
            let errorMsg = `Falha ao editar (Status: ${response.status}).`;
            alert(`Erro ao editar consulta. Detalhes: ${errorMsg}`);
            throw new Error(errorMsg);
        }
    } catch (err) {
        console.error("Erro na comunicação PUT:", err);
        alert(`Erro ao editar consulta. Verifique o console.`);
        buscaConsultas(); 
        throw err; 
    }
  };

  const handleEditClick = (consulta: Consultas) => {
    setConsultaSelecionada(consulta);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setConsultaSelecionada(null);
  }

  const formatarData = (dataString: string): string => {
  if (!dataString) return '';
  // Espera o formato YYYY-MM-DD vindo do banco/API
  const partes = dataString.split('-');
  if (partes.length === 3) {
      const [year, month, day] = partes;
      return `${day}/${month}/${year}`; // Retorna DD/MM/YYYY
  }
  return dataString; // Retorna original se não estiver no formato esperado
};

  const renderContent = () => {
    if (error) {
      return (
        <div className="text-red-500 p-4">
          <p>Erro: {error}</p>
        </div>
      );
    }
  
    if (consultas.length === 0) {
      return <p className="text-white text-xl mt-5">Nenhuma consulta encontrada.</p>;
    }
  
    return consultas.map((consulta) => (
      <div key={consulta.id} className="relative">
        
        <button
          onClick={() => deletaConsulta(consulta.id)}
          className="absolute top-[-10px] right-[-10px] 
                     bg-red-600 text-white font-bold 
                     rounded-full w-8 h-8 flex items-center justify-center 
                     shadow-lg hover:bg-red-800 transition duration-150 transform hover:scale-110 z-10 text-2xl leading-none"
          title={`Deletar consulta ID: ${consulta.id}`}
        >
          &times; 
        </button>
        
        <div className="bg-white w-[300px] h-90 shadow-4xl rounded-xl text-center pt-5 pb-5 p-4 relative">
          <h3 className="text-[#087bca] font-bold text-4xl mb-2">
            {consulta.especialidade}
          </h3>
          <p className="text-3xl italic font-bold pt-1">
            {formatarData(consulta.data_consulta)}
          </p>
          <p className="text-3xl pt-1 font-bold">
            {consulta.hora_consulta}
          </p>
          <p className="text-2xl pt-2 text-gray-600">
            {consulta.local}
          </p>
          
          <button
            onClick={() => handleEditClick(consulta)}
            className="mt-20 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition font-semibold text-sm shadow-md"
            title="Editar agendamento"
          >
            ✏️ EDITAR
          </button>
        </div>
      </div>
    ));
  };


  return (
    <main className="h-screen flex flex-col items-center bg-[#087bca]">
      <div className="p-8 pt-20 text-center ">
        <h1 className="text-white text-5xl font-bold mb-2">
          CONSULTAS E EXAMES
        </h1>
      </div>
      <div className="mb-10">
          <h2 className="text-white text-3xl font-semibold">Minhas Consultas</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-5 p-8">
        {renderContent()}
      </div>

      {isModalOpen && consultaSelecionada && (
        <ModalEdicao 
          consulta={consultaSelecionada}
          onClose={handleCloseModal}
          onSave={editarConsulta}
        />
      )}
      <ToastContainer />
    </main>
  );
}
import { useState } from "react";
import Calendario from "./index";
import ConsultaExames from "./consultaExames";

export default function CalendarioWrapper() {
  const [page, setPage] = useState<"calendario" | "consultaExames">("calendario");
  const [dados, setDados] = useState({
    data: "",
    hora: "",
    local: "",
    especialidade: "",
  });

  function handleAgendar(novosDados: typeof dados) {
    setDados(novosDados);
    setPage("consultaExames");
  }

  return page === "calendario" ? (
    <Calendario onAgendar={handleAgendar} />
  ) : (
    <ConsultaExames dados={dados} />
  );
}
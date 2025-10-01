import { Link } from "react-router-dom";

export default function Guia() {
  return (
    <main className="h-screen flex flex-col items-center flex-grow">
  <div className="flex flex-col gap-10 pt-10 text-center">
    <h1 className="text-white text-5xl font-bold pb-5">GUIA</h1>
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <Link to="/guiaHcFacil" className="div-guia">
        <div className="div-guia">
          <h1 className="text-black text-2xl font-bold mb-2 pt-3">
            Guia para o site Hospital das Clínicas
          </h1>
          <img
            src="../../../public/logohc.png"
            alt="Logo-HC"
            className="p-8"
          />
          <p className="text-black text-2xl p-8">
            Essa opção contém um grande acervo de guias para o site oficial do hospital das clínicas.
          </p>
        </div>
      </Link>
      <Link to="/guiaSiteHc" className="div-guia">
        <div className="div-guia">
          <h1 className="text-black text-2xl font-bold mb-2 pt-3">
            Guia para o site HC Fácil
          </h1>
          <img
            src="../../../public/logohc.png"
            alt="Logo-HC"
            className="p-8"
          />
          <p className="text-black text-2xl p-8 ">
            Essa opção contém um grande acervo de guias para o nosso site HC Fácil.
          </p>
        </div>
      </Link>
    </div>
  </div>
</main>

  );
}

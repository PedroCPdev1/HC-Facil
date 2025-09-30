import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function voltaMenu() {
    navigate("/");
  }

  function quemSomos() {
    navigate("/quemSomos");
  }

  return (
    <header className="header bg-white shadow-2xl">
      <div className="header-container m-0 p-0 w-full h-30 flex flex-row gap-5">
        <button
          onClick={voltaMenu}
          className="header-logo flex items-center scale-125 h-25 w-60 ml-10 pt-4"
        >
          <img src="../public/logo.png" alt="Logo HC Fácil" />
        </button>
        <div className="header-menu flex flex-row gap-5 items-center justify-end w-full mr-10">
          <button
            onClick={voltaMenu}
            className="bg-[#087bca] text-white px-6 py-2 rounded-2xl hover:bg-[#005d9b] transition h-16 w-65 text-center text-2xl pt-4"
          >
            Inicio
          </button>
          <button
            onClick={quemSomos}
            className="bg-[#087bca] text-white px-6 py-2 rounded-2xl hover:bg-[#005d9b] transition h-16 w-65 text-center text-2xl pt-4"
          >
            Quem somos
          </button>
        </div>
      </div>
    </header>
  );
}

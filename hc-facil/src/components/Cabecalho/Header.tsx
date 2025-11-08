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
    <div className="header-container m-0 p-0 w-full h-25 flex items-center justify-between px-6">
      
      <button 
        onClick={voltaMenu} 
        className="flex items-center scale-100 sm:scale-110 lg:scale-125"
      >
        <img 
          src="public/logo.png" 
          alt="Logo HC Fácil" 
          className="h-12 w-auto sm:h-16 lg:h-20 mt-2"
        />
      </button>

      <div className="flex flex-row gap-3 sm:gap-5 items-center">
        
        <button
          onClick={voltaMenu}
          className="bg-[#087bca] text-white px-4 sm:px-6 py-2 rounded-2xl hover:bg-[#005d9b] transition h-12 sm:h-14 w-28 sm:w-40 text-center text-lg sm:text-xl"
        >
          Início
        </button>

        <button
          onClick={quemSomos}
          className="bg-[#087bca] text-white px-4 sm:px-6 py-2 rounded-2xl hover:bg-[#005d9b] transition h-12 sm:h-14 w-32 sm:w-44 text-center text-lg sm:text-xl"
        >
          Quem somos
        </button>

      </div>
    </div>
  </header>
  );
}

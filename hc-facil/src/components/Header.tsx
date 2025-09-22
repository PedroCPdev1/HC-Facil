import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header bg-white shadow-2xl">
      <div className="header-container m-0 p-0 w-full h-30 flex flex-row gap-5">
        <Link to="/" className="header-logo flex items-center scale-125 h-25 w-60 ml-10">
          <img src="../public/logo.png" alt="Logo HC Fácil" />
        </Link>
        <div className="header-menu flex flex-row gap-5 items-center justify-end w-full mr-10">
          <Link to="/" className="bg-[#087bca] text-white px-6 py-2 rounded-2xl hover:bg-[#005d9b] transition h-16 w-60 text-center text-xl pt-3">Inicio</Link>
          <Link to="quemSomos" className="bg-[#087bca] text-white px-6 py-2 rounded-2xl hover:bg-[#005d9b] transition h-16 w-60 text-center text-xl pt-3">Quem somos</Link>
        </div>
      </div>
    </header>
  );
}

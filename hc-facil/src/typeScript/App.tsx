import "../css/App.css";

export default function App() {
  return (
    <main className="flex-1 flex flex-col items-center text-center pt-45 ">
      <div>
        <h1 className="mt-5 mb-4 text-6xl text-white font-bold tracking-tight">Bem Vindo ao HC Fácil!</h1>
      </div>
      <h2 className="text-white font-bold text-3xl">Pressione a opção desejada</h2>
      <nav>
            <ul id="menu">
                <li><a href="/guia.html">Guia</a></li>
                <li><a href="/calendario.html">Calendário</a></li>
                <li><a href="/consultas-exames.html">Consultas e Exames</a></li>
                <li><a href="/notificacoes.html">Notificações</a></li>
                <li><a href="/quem-somos.html">Quem Somos</a></li>
                <li><a href="/faq.html">FAQ</a></li>
                <li><a href="/contato.html">Contato</a></li>
            </ul>
        
        </nav>
    </main>
  );
}

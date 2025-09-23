export default function QuemSomos() {
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="p-8 pt-50 text-center ">
        <h1 className="text-white text-5xl font-bold mb-2">QUEM SOMOS</h1>
      </div>

      <div className="flex flex-wrap gap-15 justify-center">
        <div className="flex flex-col p-5 w-120 h-160 bg-white rounded-4xl shadow-[0px_10px_5px_rgba(0,0,0,0.2)] justify-center text-3xl text-center items-center transform hover:scale-105 transition-transform duration-300">
          <h2 className="font-bold pb-5">Alisson de Oliveira Cavalcante</h2>
          <img
            src="../../../public/alisson.jpg"
            alt="Foto Aluno"
            className="w-70 h-90 rounded-3xl"
          />
          <p className="text-2xl pt-8">RM 565154 - Turma 1TDSPH</p>
          <div className="flex gap-5 pt-5">
            <a href="/">
              <img
                src="../../../public/linkedin.png"
                alt="LinkedinPng"
                className="size-13"
              />
            </a>
            <a href="/">
              <img
                src="../../../public/github.png"
                alt="GithubPng"
                className="size-13"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col p-5 w-120 h-160 bg-white rounded-4xl shadow-[0px_10px_5px_rgba(0,0,0,0.2)] justify-center text-3xl text-center items-center transform hover:scale-105 transition-transform duration-300">
          <h2 className="font-bold pb-5">João Vitor Biribilli Ravelli</h2>
          <img
            src="../../../public/joao.jpg"
            alt="Foto Aluno"
            className="w-80 h-90 rounded-3xl"
          />
          <p className="text-2xl pt-8">RM 565154 - Turma 1TDSPH</p>
          <div className="flex gap-5 pt-5">
            <a href="/">
              <img
                src="../../../public/linkedin.png"
                alt="LinkedinPng"
                className="size-13"
              />
            </a>
            <a href="/">
              <img
                src="../../../public/github.png"
                alt="GithubPng"
                className="size-13"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col p-5 w-120 h-160 bg-white rounded-4xl shadow-[0px_10px_5px_rgba(0,0,0,0.2)] justify-center text-3xl text-center items-center transform hover:scale-105 transition-transform duration-300">
          <h2 className="font-bold pb-5">Pedro Chasci Puga</h2>
          <img
            src="../../../public/pedro.jpeg"
            alt="Foto Aluno"
            className="w-80 h-90 rounded-3xl"
          />
          <p className="text-2xl pt-8">RM 565154 - Turma 1TDSPH</p>
          <div className="flex gap-5 pt-5">
            <a href="/">
              <img
                src="../../../public/linkedin.png"
                alt="LinkedinPng"
                className="size-13"
              />
            </a>
            <a href="/">
              <img
                src="../../../public/github.png"
                alt="GithubPng"
                className="size-13"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

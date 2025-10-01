export default function QuemSomos() {
  return (
    <main className="h-screen flex flex-col items-center pb-12 bg-[#087bca]">
  <div className="p-8 pt-20 text-center">
    <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
      QUEM SOMOS
    </h1>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl">
    
    <div className="flex flex-col p-6 bg-white rounded-3xl shadow-lg justify-center items-center 
                    text-center transform hover:scale-105 transition-transform duration-300">
      <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl pb-4">
        Alisson de Oliveira Cavalcante
      </h2>
      <img
        src="../../../public/alisson.jpg"
        alt="Foto Aluno"
        className="w-full max-w-[250px] h-auto rounded-2xl object-cover"
      />
      <p className="text-lg sm:text-xl lg:text-2xl pt-6">
        RM 565154 - Turma 1TDSPH
      </p>
      <div className="flex gap-5 pt-5">
        <a href="/">
          <img
            src="../../../public/linkedin.png"
            alt="LinkedinPng"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </a>
        <a href="/">
          <img
            src="../../../public/github.png"
            alt="GithubPng"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </a>
      </div>
    </div>

    <div className="flex flex-col p-6 bg-white rounded-3xl shadow-lg justify-center items-center 
                    text-center transform hover:scale-105 transition-transform duration-300">
      <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl pb-4">
        João Vitor Biribilli Ravelli
      </h2>
      <img
        src="../../../public/joao.jpg"
        alt="Foto Aluno"
        className="w-full max-w-[250px] h-auto rounded-2xl object-cover"
      />
      <p className="text-lg sm:text-xl lg:text-2xl pt-6">
        RM 565154 - Turma 1TDSPH
      </p>
      <div className="flex gap-5 pt-5">
        <a href="/">
          <img
            src="../../../public/linkedin.png"
            alt="LinkedinPng"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </a>
        <a href="/">
          <img
            src="../../../public/github.png"
            alt="GithubPng"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </a>
      </div>
    </div>

    <div className="flex flex-col p-6 bg-white rounded-3xl shadow-lg justify-center items-center 
                    text-center transform hover:scale-105 transition-transform duration-300">
      <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl pb-4">
        Pedro Chasci Puga
      </h2>
      <img
        src="../../../public/pedro.jpeg"
        alt="Foto Aluno"
        className="w-full max-w-[250px] h-auto rounded-2xl object-cover"
      />
      <p className="text-lg sm:text-xl lg:text-2xl pt-6">
        RM 565154 - Turma 1TDSPH
      </p>
      <div className="flex gap-5 pt-5">
        <a href="/">
          <img
            src="../../../public/linkedin.png"
            alt="LinkedinPng"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </a>
        <a href="/">
          <img
            src="../../../public/github.png"
            alt="GithubPng"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </a>
      </div>
    </div>

  </div>
</main>

  );
}

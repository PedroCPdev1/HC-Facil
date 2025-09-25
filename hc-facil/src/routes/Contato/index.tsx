export default function Contato() {
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="p-8 pt-20 text-center ">
        <h1 className="text-white text-5xl font-bold mb-2">
          Contato
        </h1>
      </div>
      <div className="grid grid-cols-3 w-500 h-200 p-8 gap-20 bg-white shadow-md rounded-4xl text-center">
        <div className="flex flex-col p-8 bg-gray-100 rounded-4xl text-3xl">
          <h2 className="font-bold mb-4">Entre em contato conosco</h2>
        </div>
        <div className="flex flex-col p-8 bg-gray-100 rounded-4xl text-3xl">
          <h2 className="font-bold mb-4">Nossos canais de atendimento</h2>
        </div>
        <div className="flex flex-col p-8 bg-gray-100 rounded-4xl text-3xl">
          <h2 className=" font-bold mb-4">Localização</h2>
        </div>
      </div>
      </main>
  )
}
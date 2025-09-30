import { useNavigate } from "react-router-dom";

const videos = [
  {
    id: "1",
    title: "Guia Acesso (Senha ou Usuário incorreto)",
    thumb:
      "https://i.ytimg.com/vi/y7K61DvXQO4/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgWChOMA8=&rs=AOn4CLDGCUkq9deTmOII13vHdxgd8WZ2pw",
  },
  {
    id: "2",
    title: "Guia Consulta online",
    thumb:
      "https://i.ytimg.com/vi/y7K61DvXQO4/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgWChOMA8=&rs=AOn4CLDGCUkq9deTmOII13vHdxgd8WZ2pw",
  },
  {
    id: "3",
    title: "Guia de Exames",
    thumb:
      "https://i.ytimg.com/vi/y7K61DvXQO4/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgWChOMA8=&rs=AOn4CLDGCUkq9deTmOII13vHdxgd8WZ2pw",
  },
];

export default function VideosPage() {
  const navigate = useNavigate();

  return (
    <main className="h-screen flex flex-col items-center">
      <div className="p-8 pt-50 text-center ">
        <h1 className="text-white text-5xl font-bold mb-2">Guias</h1>
        <p className="text-white text-3xl font-bold mb-2 mt-5">
          Escolha o guia que deseja acessar
        </p>
      </div>
      <div className="flex gap-8 justify-center mt-10">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl shadow-lg p-4 cursor-pointer hover:scale-105 transition w-150 h-100"
            onClick={() => navigate(`/video/${video.id}`)}
          >
            <img
              src={video.thumb}
              alt={video.title}
              className="w-full h-80 object-cover rounded"
            />
            <h2 className="text-2xl font-bold mt-4 text-center">
              {video.title}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}

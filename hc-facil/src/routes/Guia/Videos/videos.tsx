import { useParams, useNavigate } from "react-router-dom";

const videos: Record<string, { title: string; url: string }> = {
  "1": {
    title: "Guia Calendario",
    url: "https://www.youtube.com/embed/eLPkjVgDYeo?si=99JPlmzYvbkQG34W",
  },
  "2": {
    title: "Guia Consultas",
    url: "https://www.youtube.com/embed/cOGMI0IcIGQ?si=nrpnqiWcujFnspBj",
  },
  "3": {
    title: "Guia sobre nos`",
    url: "https://www.youtube.com/embed/QVHWhnOqYhA?si=twP4Cnot4Q4cHW_2",
  },
};

export default function VideoDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const video = id ? videos[id] : undefined;

  if (!video) return <div>Vídeo não encontrado.</div>;

  return (
    <main className="h-screen flex flex-col">
      <button
        onClick={() => navigate(-1)}
        className="ml-5 bg-white text-blue-700 rounded-xl text-2xl mt-8 h-15 w-20 hover:bg-gray-400 transition"
      >
        Voltar
      </button>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl font-bold mb-6">{video.title}</h1>
        <iframe
          width="700"
          height="450"
          src={video.url}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  );
}

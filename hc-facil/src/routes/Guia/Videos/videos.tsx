import { useParams, useNavigate } from "react-router-dom";

const videos = {
  "1": {
    title: "Placeholder",
    url: "https://www.youtube.com/watch?v=u31qwQUeGuM",
  },
  "2": {
    title: "Placeholder",
    url: "https://www.youtube.com/watch?v=u31qwQUeGuM",
  },
  "3": {
    title: "Placeholder",
    url: "https://www.youtube.com/watch?v=u31qwQUeGuM",
  },
};

export default function VideoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videos[id];

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
          width="560"
          height="315"
          src={video.url}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  );
}

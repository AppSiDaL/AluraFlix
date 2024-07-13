import { useEffect, useState } from "react";
import { getVideos } from "../services/videosService";
import MainCard from "../components/MainCard";
import Container from "../components/Container";
export default function Home() {
  interface Video {
    id: number;
    title: string;
    description: string;
    url: string;
    category: string;
    img: string;
    bg?: string;
  }
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    getVideos().then((videos) => {
      setVideos(videos);
    });
  }, []);
  return (
    <div>
      <MainCard video={videos[0]} />
      <Container
        title="Front-End"
        color="#6bd0fe"
        videos={videos.filter((video) => video.category == "Front-end")}
      />
      <Container
        title="Back-End"
        color="#01C86E"
        videos={videos.filter((video) => video.category == "Back-end")}
      />
      <Container
        title="Inovacion"
        color="#FFBB07"
        videos={videos.filter((video) => video.category == "Innovación")}
      />
    </div>
  );
}

const url = "http://localhost:3333/videos";

interface Video {
  title: string;
  description: string;
  url: string;
  category: string;
  img: string;
  bg?: string;
}
export const getVideos = async () => {
  const response = await fetch(url);
  return response.json();
};

export const deteleVideo = async (id: string) => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

export const createVideo = async (video: Video) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
  return response.json();
};

export const modifyVideo = async (video: Video, id: string) => {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
  return response.json();
};

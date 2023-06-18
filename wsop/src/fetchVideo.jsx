const fetchVideo = async (queryKey) => {
  const id = queryKey[1];
  const video = await fetch(`https://cdn.jwplayer.com/v2/media/${id}`);

  console.log(id, video);

  return video.json();
};

export default fetchVideo;

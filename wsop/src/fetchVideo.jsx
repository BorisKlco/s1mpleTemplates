const fetchVideo = async ({ queryKey }) => {
  const id = queryKey[1];
  const video = await fetch(`https://cdn.jwplayer.com/v2/media/${id}`);

  if (!video.ok) {
    throw new Error(`${id} not ok`);
  }

  return video.json();
};

export default fetchVideo;

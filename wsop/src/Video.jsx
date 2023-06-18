import { useParams } from "react-router-dom";

const Video = () => {
  const { id } = useParams();

  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default Video;

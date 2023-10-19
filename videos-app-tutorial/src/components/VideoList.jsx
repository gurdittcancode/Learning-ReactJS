import Video from "./Video";
import PlayButton from "./PlayButton";
import useGetVideos from "../hooks/useGetVideos";

function VideoList({ editVideo }) {

  const videos = useGetVideos();

  return (
    <>
      {videos.map((video) => (
        <Video key={Math.floor(Math.random() * 100 + 1)} {...video} editVideo={editVideo}>
          <PlayButton
            onPlay={() => console.log(`Playing ${video.title}`)}
            onPause={() => console.log(`Paused ${video.title}`)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
}

export default VideoList;

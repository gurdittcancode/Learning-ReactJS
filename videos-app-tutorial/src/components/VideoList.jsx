import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({ editVideo, videos }) {

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

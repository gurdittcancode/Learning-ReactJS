import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({ videos, dispatch, editVideo }) {
  return (
    <>
      {videos.map((video) => (
        <Video key={Math.floor(Math.random() * 100 + 1)} {...video} dispatch={dispatch} editVideo={editVideo}>
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

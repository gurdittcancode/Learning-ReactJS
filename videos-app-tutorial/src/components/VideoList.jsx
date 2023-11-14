import Video from "./Video";
import PlayButton from "./PlayButton";
import {v4 as uuid} from "uuid";

function VideoList({ editVideo, videos }) {
  return (
    <>
      {videos &&
        videos.map((video) => (
          <Video
            key={uuid()}
            {...video}
            editVideo={editVideo}
          >
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

import Video from "./Video";
import PlayButton from "./PlayButton";
import { v4 as uuid } from "uuid";
import { useMemo, useCallback } from "react";

function VideoList({ editVideo, videos }) {
  const play = useCallback(() => console.log(`Playing`), []);

  const pause = useCallback(() => console.log(`Paused`), []);
  //since these play and pause won't change, the props to PlayButton won't change
  //so, PlayButton is truly memoized.

  const memoButton = useMemo(
    () => (
      <PlayButton onPlay={play} onPause={pause}>
        Play
      </PlayButton>
    ),
    [pause, play]
  );

  //bahar isi liye rakha hai kyunki even though PB and its props are memoized, its instances
  //may not be memoized. ffs...

  return (
    <>
      {videos &&
        videos.map((video) => (
          <Video key={uuid()} {...video} editVideo={editVideo}>
            {memoButton}
          </Video>
        ))}
    </>
  );
}

export default VideoList;

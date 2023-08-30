import "./styles/Video.css";

function Video({ title, channel, views, time, verified, id, children }) {
  return (
    <div className="container">
      <div className="pic">
        <img src={`https://picsum.photos/id/${id}/160/90`} alt="random pic" />
      </div>

      <div className="title">{title}</div>
      <div className="channel">
        {channel} {verified && "✔️"}
      </div>
      {/* But if verified is a number or a string, that number could be printed */}
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Video;

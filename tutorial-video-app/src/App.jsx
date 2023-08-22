import "./App.css";
import videos from "./data";

import Video from "./components/Video";

function App() {
    return (
        <div className="App">
            <div>Videos</div>
            {videos.map((video) => (
                <Video key={Math.floor(Math.random() * 100 + 1)} {...video} />
            ))}
        </div>
    );
}

export default App;

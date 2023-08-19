import "./App.css";

import Video from "./components/Video";

function App() {

    let obj = {
        title: "Node.js tutorial",
        views: "210K",
        time: "3 days ago",
        channel: "gurdittcancode",
    };

    return (
        <div className="App">
            <div>Videos</div>
            <Video
                title="MongoDB tutorial"
                views="1M"
                time="1 hour ago"
                channel="gurdittcancode"
            />
            <Video
                {...obj}
                //if you have an external object, spread it using spread operator
                //but the keys must match the name of props in child component
            />
            <Video
                title="React.js tutorial"
                views="10K"
                time="1 year ago"
                channel="gurdittcancode"
            />
        </div>
    );
}

export default App;

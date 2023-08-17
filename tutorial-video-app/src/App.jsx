import "./App.css";

function App() {

  let name = "React App";
  console.log("App");

    return (
        <div className="App">
          <div className={name}>
            Hello World
            {name}
          </div>
        </div>
    );
}

export default App;

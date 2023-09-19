import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Running useEffect");
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    console.log(id);
  }, []);

  return (
    <div className="flex text-8xl">
      <h1>
        {" "}
        {time.getHours() < 10 && "0"}
        {time.getHours()}
      </h1>{" "}
      :
      <h1>
        {" "}
        {time.getMinutes() < 10 && "0"}
        {time.getMinutes()}
      </h1>{" "}
      :
      <h1>
        {" "}
        {time.getSeconds() < 10 && "0"}
        {time.getSeconds()}
      </h1>
    </div>
  );
}

export default Clock;

import { useState } from "react";

function NewNation({ updater }) {
  const [nation, setNation] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nation);
    updater(nation);
  }

  function handleChange(event) {
    event.stopPropagation();
    // console.log(event.target.name, event.target.value);
    setNation({ ...nation, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <h2>Add a new nation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="code">Code:</label>
          <input type="text" name="code" id="code" onChange={handleChange} />
        </div>

        <button type="submit">Add nation</button>
      </form>
    </div>
  );
}

export default NewNation;

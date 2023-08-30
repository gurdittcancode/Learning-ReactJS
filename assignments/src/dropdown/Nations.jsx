function Nations({ nations }) {
  function handleChange(event) {
    console.log(
      event.target.value,
      event.target.options[event.target.options.selectedIndex].innerText
    );
  }

  return (
    <div>
      <select name="nations" id="nations" onChange={handleChange}>
        {nations.map((nation, idx) => {
          return (
            <option key={idx} value={nation.code}>
              {nation.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Nations;

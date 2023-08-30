function FilterList({ filterList, listItems }) {
  function handleChange(event) {
    event.stopPropagation();
    console.log(event.target.value);
    const substring = event.target.value;

    if (substring === "") {
      return filterList([
        "India",
        "China",
        "Pakistan",
        "Mexico",
        "Spain",
        "Canada",
        "Russia",
      ]);
    }

    filterList(
      listItems.filter((it) => {
        if (it.indexOf(substring) !== -1) return it;
      })
    );
  }

  return (
    <div>
      <input type="text" style={{ fontSize: "32px" }} onChange={handleChange} />
    </div>
  );
}

export default FilterList;

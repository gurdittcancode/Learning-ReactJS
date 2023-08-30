import { useState } from "react";
import RenderList from "./RenderList";
import FilterList from "./FilterList";

function Lists() {
  const [listItems, setListItems] = useState([
    "India",
    "China",
    "Pakistan",
    "Mexico",
    "Spain",
    "Canada",
    "Russia",
  ]);

  function filterList(newList) {
    setListItems(newList);
  }

  return (
    <div style={{ fontSize: "32px" }}>
      <FilterList filterList={filterList} listItems={listItems} />
      <RenderList listItems={listItems} />
    </div>
  );
}

export default Lists;

import { useState } from "react";
import NewNation from "./NewNation";
import Nations from "./Nations";

function Dropdown() {
  const [nations, setNations] = useState([
    { name: "India", code: "IN" },
    { name: "Pakistan", code: "PK" },
    { name: "Bangladesh", code: "BG" },
  ]);

  function updateNations(nation) {
    setNations([...nations, nation]);
  }

  return (
    <>
      <h1>Nations!</h1>
      <Nations nations={nations} />
      <NewNation updater={updateNations} />
    </>
  );
}

export default Dropdown;

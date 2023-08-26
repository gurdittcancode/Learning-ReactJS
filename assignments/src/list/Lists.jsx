import List from "./List";

function Lists() {
  const listStyles = ["alpha", "numbered", "bullet"];
  const items = ["A", "B", "C"];

  return (
    <div>
      {listStyles.map((listStyle, idx) => {
        return <List key={idx} listStyle={listStyle} items={items} />;
      })}
    </div>
  );
}

export default Lists;

function List({ listStyle, items }) {
  switch (listStyle) {
    case "numbered": {
      listStyle = "upper-roman";
      break;
    }
    case "alpha": {
      listStyle = "lower-alpha";
      break;
    }
    case "bullet": {
      listStyle = "disc";
      break;
    }
  }

  return (
    <ul style={{ listStyle: listStyle }}>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

export default List;

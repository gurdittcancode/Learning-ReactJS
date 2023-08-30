function RenderList({ listItems }) {
  return (
    <div>
      <ul>
        {listItems.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderList;

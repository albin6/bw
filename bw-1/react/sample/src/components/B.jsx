function B({ name }) {
  console.log("component B rendered");
  return (
    <div>
      B name<span>{name}</span>
    </div>
  );
}

export default B;

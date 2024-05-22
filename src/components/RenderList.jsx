function RenderList ({ animals }) {
    return (
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>{animal.label}</li>
        ))}
      </ul>
    );
  }
  
  export default RenderList;
function ShowPlanets  ({ planets })  {
    return (
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>{planet}</li>
        ))}
      </ul>
    );
  }
  
  export default ShowPlanets;
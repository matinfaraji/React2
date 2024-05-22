function Pokecard  ({ pokemon })  {
    return (
      <div className="pokecard">
        <img src={pokemon.image} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
        <p>Type: {pokemon.type}</p>
      </div>
    );
  }
  function Pokedex  ({ pokemon })  {
    return (
      <div className="pokedex">
        {pokemon.map(pokemon => (
          <Pokecard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
  export default Pokedex;
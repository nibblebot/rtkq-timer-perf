import { useGetPokemonByNameQuery } from "./services/pokemon";

export function Pokemon({ name }: { name: string }) {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  if (error) {
    return <li>Error</li>;
  }

  if (isLoading) {
    return <li>Loading...</li>;
  }

  if (!data) {
    return <li>No Data</li>;
  }

  return (
    <li>
      <h3>{data.species.name}</h3>
      <img src={data.sprites.front_shiny} alt={data.species.name} />
    </li>
  );
}

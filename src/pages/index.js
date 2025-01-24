import { PokemonCards } from "@/components/PokemonCards";
import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=30"
  );
  const { data: pokemon } = useFetch(url);

  return (
    <div className="max-w-full max-h-full min-h-[100vh]   bg-stone-200">
      <div className="lg:w-[60rem] md:w-[45rem] w-[20rem]  m-auto">
        <h1 className="text-4xl font-bold mb-10 pt-5">Card List:</h1>

        <div
          id="Cards"
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 place-content-center  justify-center items-center"
        >
          {pokemon &&
            pokemon.map((pokemon) => <PokemonCards pokemon={pokemon} />)}
        </div>
      </div>
    </div>
  );
}

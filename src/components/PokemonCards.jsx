import React from "react";

export const PokemonCards = ({ pokemon }) => {
  return (
    <div
      key={pokemon.id}
      className="block lg:max-w-[18rem]  p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <img
        className="size-full"
        src={pokemon.sprites.back_default}
        alt={`${pokemon.name} picture`}
      />
      <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {pokemon.name}
      </h3>
      <p className="font-normal text-md text-gray-700 dark:text-gray-400">
        {pokemon.abilities[0].ability.name}
      </p>
    </div>
  );
};

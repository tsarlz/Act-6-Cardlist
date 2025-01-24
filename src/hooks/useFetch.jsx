import React, { useRef } from "react";
import { useState, useEffect } from "react";

export const useFetch = (URL) => {
  const [data, setData] = useState([]);
  const cachedRef = useRef(new Map());
  const cachedName = cachedRef.current;

  useEffect(() => {
    if (cachedName.has("cachedData")) {
      setData(cachedName.get("cachedData"));
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        const pokemonList = data.results;

        const pokemonDetails = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const pokemonDetailResponse = await fetch(pokemon.url);
            const pokemonDetailData = await pokemonDetailResponse.json();
            return pokemonDetailData;
          })
        );

        cachedName.set("cachedData", pokemonDetails);
        setData(pokemonDetails);
        console.log(pokemonDetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [URL]);

  return { data };
};

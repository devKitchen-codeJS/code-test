"use client";

import { getPokemon } from "@/app/utils/fetchPokemon";
import {
  setAbilitiesForCurrentPokemon,
  setStatsForCurrentPokemon,
} from "@/features/appSlice";
import { useAppDispatch } from "@/hooks/reduxHooks";
import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import { ListItem, Pokemon } from "@/app/types";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

interface IListAProps {
  listOfItems: { name: string; url: string }[];
  backgroundColor: string;
  fontFamily: NextFontWithVariable;
  fontSize: string;
  fontColor: string;
}

const ListA: React.FC<IListAProps> = ({
  listOfItems,
  backgroundColor,
  fontFamily,
  fontSize,
  fontColor,
}) => {
  const [state, setState] = useState({} as Pokemon);
  const dispatch = useAppDispatch();
  
  //Getting data on the selected pokémon
  const handleGetData = async (name: any) => {
    let current_pokemon: Pokemon = await getPokemon(name);
    setState(current_pokemon);
  };

  //Save the data about the current and selected Pokémon to the store
  dispatch(setAbilitiesForCurrentPokemon(state.abilities));
  dispatch(setStatsForCurrentPokemon(state.stats));

  return (
    <div className={`w-[80%] flex justify-center `}>
      <div className="  w-[100%]  ">
        {listOfItems.map((item: ListItem, index: number) => (
          <div
            className={`collapse ${backgroundColor} collapse-arrow  mb-5`}
            key={index}
            onClick={() => handleGetData(item.name)}
          >
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              <span
                className={`flex justify-center ${fontFamily.variable} font-sans  ${fontColor} ${fontSize} uppercase font-bold`}
              >
                {item.name}
              </span>
            </div>
            <div className="collapse-content">
              {Object.values(state).length ? (
                <PokemonCard currentPokemon={state} fontFamily={fontFamily} />
              ) : (
                <p> loading... </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListA;

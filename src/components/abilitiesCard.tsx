"use client";

import { typedFetch } from "@/app/utils/fetchPokemon";
import appSelectore from "@/features/appSelectors";
import { useAppSelector } from "@/hooks/reduxHooks";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import React, { useEffect, useState } from "react";

interface IAbilities {
  ability: { name: string; url: string };
  effect_entries: string;
}

interface IAbilitiesCard {
  fontFamily: NextFontWithVariable;
  fontSize: string;
  backgroundColor: string;
  fontColor: string;
}

const AbilitiesCard: React.FC<IAbilitiesCard> = ({
  fontFamily,
  fontSize,
  backgroundColor,
  fontColor,
}) => {
  let abilitiesPokemon = useAppSelector(appSelectore.getAbilitiesPokemon);
  const [abilityState, setAbilityData] = useState([] as IAbilities[]);

  //Searching for a description of the Pokemon skill in English
  const checkLanguage = (res: any) => {
    const effectItem = res.effect_entries.find(
      (effect_item: any) => effect_item.language.name === "en"
    );
    if (effectItem) {
      return effectItem;
    }
    return undefined;
  };

  //We filter the statistics obtained from the redax => pull the necessary data for the output
  const fetchData = async (temp: any) => {
    try {
      let data = await Promise.all(
        temp.map(async (item: any) => {
          let res = await typedFetch(item.ability.url); //We get a detailed description of the Pokémon skill
          let checkedEffects = checkLanguage(res);
          let abilityData = {
            ability: item.ability,
            effect_entries: checkedEffects.effect,
          };
          return abilityData;
        })
      );
      setAbilityData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (abilitiesPokemon) {
      fetchData(abilitiesPokemon);
    }
  }, [abilitiesPokemon]);

  return (
    <div className="collapse bg-base-200 mt-10 collapse-arrow text-[20px]">
      <input type="radio" name="my-accordion-3 	" />
      <div
        className={`collapse-title text-xl  text-[20px] uppercase font-bold ${fontFamily.variable} font-sans`}
      >
        Abilities
      </div>
      <div className={`collapse-content  ${backgroundColor}`}>
        {abilityState?.map((items: IAbilities, index: number) => (
          <div
            key={index}
            className={` ${fontFamily.variable} font-sans ${fontColor} ${fontSize}`}
          >
            <p className=" text-[20px] font-bold   uppercase mt-5">
              {items.ability.name} :
            </p>{" "}
            {items.effect_entries}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbilitiesCard;

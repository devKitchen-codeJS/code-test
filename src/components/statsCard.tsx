"use client";

import appSelectore from "@/features/appSelectors";
import { ISats } from "@/features/appTypes";
import { useAppSelector } from "@/hooks/reduxHooks";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import React from "react";

interface ISatsCard {
  fontFamily: NextFontWithVariable;
  fontSize: string;
  backgroundColor: string;
  fontColor: string;
}

const SatsCard: React.FC<ISatsCard> = ({
  fontFamily,
  fontSize,
  backgroundColor,
  fontColor,
}) => {
  let satsList = useAppSelector(appSelectore.getCurrentPokemon);

  return (
    <div
      className={`collapse bg-base-200 collapse-arrow ${fontFamily.variable} ${backgroundColor} font-sans ${fontColor} ${fontSize} `}>
      <input type='radio' name='my-accordion-2 	' />
      <div
        className={`collapse-title text-xl  text-[20px] uppercase font-bold `}>
        Stats
      </div>
      <div className='collapse-content'>
        {satsList?.map((sats: ISats, index: number) => (
          <div key={index} className=' text-[18px] uppercase'>
            <p>
              {sats.stat.name} : {sats.base_stat}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SatsCard;

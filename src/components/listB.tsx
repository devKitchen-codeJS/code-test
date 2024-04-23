import React from "react";
import SatsCard from "./StatsCard";
import AbilitiesCard from "./AbilitiesCard";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

interface IListB {
  fontFamily: NextFontWithVariable;
  fontSize: string;
  backgroundColor: string;
  fontColor: string;
}

const ListB: React.FC<IListB> = ({
  fontFamily,
  fontSize,
  backgroundColor,
  fontColor,
}) => {
  return (
    <div className={`w-[100%] `}>
      <SatsCard
        fontFamily={fontFamily}
        fontSize={fontSize}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
      />
      <AbilitiesCard
        fontFamily={fontFamily}
        fontSize={fontSize}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
      />
    </div>
  );
};

export default ListB;

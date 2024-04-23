import { Pokemon } from "@/app/types";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Image from "next/image";

interface IPokemonCardProps {
  currentPokemon: Pokemon;
  fontFamily: NextFontWithVariable;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({
  currentPokemon,
  fontFamily,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center">
      <Image
        src={currentPokemon.sprites.front_default}
        alt={currentPokemon.name}
        width={96}
        height={96}
      />

      <div
        className={`flex flex-col text-[20px] ${fontFamily.variable} font-sans  lg:ml-4`}
      >
        <span>Base experience: {currentPokemon.base_experience}</span>
        <span>Height: {currentPokemon.height}</span>
        <span>Order: {currentPokemon.order}</span>
        <span>Weight: {currentPokemon.weight}</span>
      </div>
    </div>
  );
};

export default PokemonCard;

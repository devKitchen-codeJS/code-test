import { listPokemon } from "./utils/fetchPokemon";
import ListA from "../components/ListA";
import ListB from "../components/ListB";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  variable: "--font-inter",
  subsets: ["latin"],
});

export default async function Home() {
  const listPokemonlist = await listPokemon(8);
  const array = listPokemonlist.results;

  return (
    <div className="min-h-screen max-h-full w-full flex flex-col gap-4 items-center justify-center bg-[#FCFCFC] ">
      <div className="  w-[100%]  grid grid-cols-2 p-10">
        <div className="  w-[100%]">
          <ListA
            listOfItems={array}
            backgroundColor="bg-base-200"
            fontFamily={inter}
            fontSize="text-[20px]"
            fontColor="text-black-200"
          />
        </div>
        <div className="  w-[100%]  ">
          <ListB
            backgroundColor="bg-base-200"
            fontFamily={inter}
            fontSize="text-[20px]"
            fontColor="text-black-200"
          />
        </div>
      </div>
    </div>
  );
}

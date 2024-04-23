import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAbilities, ISats, IStats } from "./appTypes";

const initialState: IStats = {
  current_pokemon: [
    {
      base_stat: 0,
      effort: 0,
      stat: { name: "", url: "" },
    },
  ],
  abilities: [
    {
      ability: {
        name: "",
        url: "",
      },
      is_hidden: false,
      slot: 0,
    },
  ],
};

export const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState: initialState,
  reducers: {
    setStatsForCurrentPokemon: (state, action: PayloadAction<ISats[]>) => {
      state.current_pokemon = action.payload;
    },
    setAbilitiesForCurrentPokemon: (
      state,
      action: PayloadAction<IAbilities[]>
    ) => {
      state.abilities = action.payload;
    },
  },
});

export const { setStatsForCurrentPokemon, setAbilitiesForCurrentPokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;

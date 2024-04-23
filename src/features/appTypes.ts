export type IStats = {
  current_pokemon: ISats[];
  abilities: IAbilities[];
};

export interface ISats {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}

export interface IAbilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

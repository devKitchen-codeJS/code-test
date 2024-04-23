export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    order: number;
    weight: number;
    sprites: {
      front_default: string;
      back_default: string;
      front_shiny?: string;
      back_shiny?: string;
    };
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
    abilities: {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }[];
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
  }
  
  export interface PokemonList {
    count: number;
    next: string;
    previous: string;
    results: ListItem[];
  }
  
  export interface ListItem {
    name: string;
    url: string;
  }
  
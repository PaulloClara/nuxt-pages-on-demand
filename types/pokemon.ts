export type PokemonT = {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
    };
  };
};

export type PokemonItemT = {
  id: number;
  name: string;
  url: string;
};

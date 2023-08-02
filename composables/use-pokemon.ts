import type { PokemonT } from "~/types/pokemon";
import type { PaginationResponseT } from "~/types/pagination";

const POKEMON_ID_REGEX = /\/pokemon\/(\d+)\//;

export default function () {
  const runtimeConfig = useRuntimeConfig();

  const pokemonList = useState<PokemonT[]>("pokemon-list", () => []);
  const pokemonLoading = useState("pokemon-loading", () => ({
    list: false,
  }));

  async function getPokemonList() {
    try {
      pokemonLoading.value.list = true;
      const { data, error } = await useFetch<PaginationResponseT<PokemonT>>(
        "/pokemon",
        { query: { limit: 32 }, baseURL: runtimeConfig.public.apiPokemon }
      );
      if (error.value) throw error;
      const list = data.value?.results || [];

      list.forEach((pokemon) => {
        pokemon.id = Number(pokemon.url.match(POKEMON_ID_REGEX)?.[1]) || 0;
      });

      pokemonList.value = list;
    } catch (error) {
      console.error(error);
    } finally {
      pokemonLoading.value.list = false;
    }
  }

  return { pokemonList, pokemonLoading, getPokemonList };
}

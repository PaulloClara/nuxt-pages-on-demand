import type { PokemonItemT, PokemonT } from "~/types/pokemon";
import type { PaginationResponseT } from "~/types/pagination";

const POKEMON_ID_REGEX = /\/pokemon\/(\d+)\//;

export default function () {
  const runtimeConfig = useRuntimeConfig();

  const pokemon = useState<PokemonT | null>("pokemon", () => null);
  const pokemonList = useState<PokemonItemT[]>("pokemon-list", () => []);
  const pokemonLoading = useState("pokemon-loading", () => ({
    list: false,
    item: false,
  }));

  async function getPokemonList() {
    try {
      pokemonLoading.value.list = true;
      const { data, error } = await useFetch<PaginationResponseT<PokemonItemT>>(
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

  async function getPokemon(payload: { pokemonId: number }) {
    try {
      pokemonLoading.value.item = true;
      const { data, error } = await useFetch<PokemonT>(
        `/pokemon/${payload.pokemonId}`,
        { baseURL: runtimeConfig.public.apiPokemon }
      );
      if (error.value) throw error;

      pokemon.value = data.value || null;
    } catch (error) {
      console.error(error);
    } finally {
      pokemonLoading.value.item = false;
    }
  }

  return { pokemonList, pokemon, pokemonLoading, getPokemon, getPokemonList };
}

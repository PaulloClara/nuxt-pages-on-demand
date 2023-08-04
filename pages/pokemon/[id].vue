<script setup lang="ts">
const route = useRoute();
const { pokemon, getPokemon } = usePokemon();

const pokemonId = Number(route.params.id);

const pageTitle = computed(() => `Pokemon ${pokemon.value?.name} - Pokedex`);
const pageDescription = computed(
  () => `Detalhes do pokemon ${pokemon.value?.name}`
);
const pageImage = computed(
  () => pokemon.value?.sprites.other["official-artwork"].front_default
);

useHead({
  title: pageTitle,
  meta: [
    { name: "description", content: pageDescription },
    { property: "og:image", content: pageImage },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "twitter:image", content: pageImage },
    { property: "twitter:title", content: pageTitle },
    { property: "twitter:description", content: pageDescription },
  ],
});
getPokemon({ pokemonId });
</script>

<template>
  <main id="page-pokemon">
    <div class="pokemon-content">
      <img
        class="pokemon-image"
        :src="pokemon?.sprites.other['official-artwork'].front_default"
        alt="Pokemon"
      />
      <h1 class="pokemon-name">{{ pokemon?.name }}</h1>
    </div>
  </main>
</template>

<style lang="scss">
#page-pokemon {
  @include page-limits;

  display: grid;
  place-items: center;
  min-height: 100vh;

  .pokemon-content {
    padding: 1.6rem 3.6rem;
    border-radius: 8px;
    background-color: rgba($primary-background-invert, 0.1);
    user-select: none;

    .pokemon-image {
      width: 100%;
      max-width: 32rem;
      height: 100%;
      max-width: 24rem;
      object-fit: contain;
      pointer-events: none;
    }

    .pokemon-name {
      margin-top: 1.2rem;
      font-size: 2.4rem;
      font-weight: 700;
      text-transform: capitalize;
      text-align: center;
    }
  }
}
</style>

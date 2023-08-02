<script setup lang="ts">
const { pokemonList, pokemonLoading, getPokemonList } = usePokemon();

getPokemonList();
</script>

<template>
  <main id="page-home">
    <div class="pokemon-list">
      <pokemon-card
        v-for="pokemon of pokemonList"
        :key="pokemon.url"
        :pokemon="pokemon"
      />
    </div>
  </main>
</template>

<style lang="scss">
#page-home {
  @include page-limits;
  --grid-columns: 1;

  .pokemon-list {
    display: grid;
    gap: 1.2rem;
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    width: 100%;
  }

  @media (min-width: 768px) {
    --grid-columns: 2;
  }

  @media (min-width: 1024px) {
    --grid-columns: 3;
  }
}
</style>

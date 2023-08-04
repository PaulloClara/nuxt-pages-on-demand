<script setup lang="ts">
import type { PokemonItemT } from "types/pokemon";

defineProps<{ pokemon: PokemonItemT }>();
</script>

<template>
  <nuxt-link class="pokemon-card" :to="`/pokemon/${pokemon.id}`">
    <p>{{ pokemon.name }}</p>
  </nuxt-link>
</template>

<style lang="scss">
.pokemon-card {
  padding: 1.6rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(4px);
  background-color: rgba($primary-background-invert, 0.1);
}
</style>

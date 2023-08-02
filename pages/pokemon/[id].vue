<script setup lang="ts"></script>

<template>
  <main id="page-pokemon-name">
    <h1>{{ $route.params.id }}</h1>
  </main>
</template>

<style lang="scss">
#page-pokemon-name {
  @include page-limits;
}
</style>

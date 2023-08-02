// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  runtimeConfig: {
    public: {
      apiPokemon: "https://pokeapi.co/api/v2",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "~/assets/styles/theme.scss"; @import "~/assets/styles/utils.scss";',
        },
      },
    },
  },
});

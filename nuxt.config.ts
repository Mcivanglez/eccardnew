// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [
        {
          rel: "icon",
          type: "shortcut icon",
          href: "/icon-128.png"
        },
        {
          rel: "apple-touch-icon",
          type: "image/x-icon",
          href: "/icon-192.png"
        }
      ]
    }
  },
  css: [
    "primevue/resources/themes/tailwind-light/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css"
  ],
  build: {
    transpile: ["primevue"],
    quiet: true
  }
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image-edge'],

  // app: https://nuxt.com/docs/api/configuration/nuxt-config/#head
  app: {
    head: {
      title: 'Sariz Wachirasook',
      titleTemplate: `%s - Resume`,

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        { hid: 'description', name: 'description', content: '' },
        { hid: 'keywords', content: '' },
        { hid: 'og:title', content: '' },
        { hid: 'og:description', content: '' },
        // { hid: 'og:image', content: '/og-image.jpg' },
        { hid: 'og:type', content: 'website' },
        { hid: 'twitter:title', content: '' },
        { hid: 'twitter:description', content: '' },
        { hid: 'twitter:card', content: 'summary_large_image' },
        // { hid: 'twitter:image', content: '/og-image.jpg' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // css:
  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // components:
  components: true,

  // @nuxt/image-edge: https://v1.image.nuxtjs.org/get-started/
  image: {
    // Options
  },
});

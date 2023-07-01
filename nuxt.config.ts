// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxt/image-edge'],

  // app: https://nuxt.com/docs/api/configuration/nuxt-config/#head
  app: {
    head: {
      title: 'Sariz Wachirasook',
      titleTemplate: `%s - Resume`,

      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Resume',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Full Stack Developer, Software Engineer',
        },
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],

      script: [
        {
          src: 'https://kit.fontawesome.com/49d34c1588.js',
          crossorigin: 'anonymous',
        },
      ],
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

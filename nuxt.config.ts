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
        {
          hid: 'og:image',
          content:
            'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff1eb4478-3479-4752-bc1c-052addc827ba%2FIMG_4844.jpeg?table=block&id=f0b9b2c8-0061-4349-a80e-c6b6a7dceea2&spaceId=b2a7ad2b-d299-42e5-9491-67820e97e610&width=2000&userId=be00b1f9-aa27-4754-8dfa-b77f6a30a7a3&cache=v2',
        },
        { hid: 'og:type', content: 'website' },
        { hid: 'twitter:title', content: '' },
        { hid: 'twitter:description', content: '' },
        { hid: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:image',
          content:
            'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff1eb4478-3479-4752-bc1c-052addc827ba%2FIMG_4844.jpeg?table=block&id=f0b9b2c8-0061-4349-a80e-c6b6a7dceea2&spaceId=b2a7ad2b-d299-42e5-9491-67820e97e610&width=2000&userId=be00b1f9-aa27-4754-8dfa-b77f6a30a7a3&cache=v2',
        },
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

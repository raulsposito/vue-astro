export default {
  ssr: false,

  head: {
    title: 'vue-astro',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Get your horoscope for today!' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: 'Vue Astro' },
      { hid: 'og-desc', property: 'og:description', content: 'Get your horoscope for today!' },
      { hid: 'og-image', property: 'og:image', content: 'https://media4.giphy.com/media/' },
      { hid: 'og-image-alt', property: 'og:image:alt', content: 'An image of the great pyramids with a cosmic flashing background' },
      { hid: 'og-url', property: 'og:url', content: 'https://vue-astro.netlify.app/' },
      { property: 'fb:app_id', content: '4731159123588293' },
      { hid: 'twitter:card', content: 'Vue Astro. Get your horoscope for today!' },
      { hid: 'twitter:creator', content: '@raul_sposito' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-gtag.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // { src: '/plugins/vue-gtag.js', }
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

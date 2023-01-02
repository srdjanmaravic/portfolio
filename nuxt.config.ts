// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        [
          '@pinia/nuxt',
          {
            autoImports: [
              // automatically imports `defineStore`
              'defineStore', // import { defineStore } from 'pinia'
              // automatically imports `defineStore` as `definePiniaStore`
              ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
            ],
          },
        ],
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge'
      ],
      css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
      ],
      app: { head: { link: [ {rel: 'icon', type: "image/x-icon", href: '/favicon.ico'} ] } }
})

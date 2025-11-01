// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Path ที่ถูกต้อง
  css: ['~/assets/css/main.css'],

  // Module ที่ติดตั้ง
  modules: ["@nuxtjs/tailwindcss"]
})
export default defineNuxtConfig({
  devtools: { 
    enabled: true,
  },
  routeRules: {
    "/csr": {ssr: false},
    "/ssg": {prerender: true},
    "/isg": {swr: 10}
  },
})

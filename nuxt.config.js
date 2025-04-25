// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@sidebase/nuxt-auth',
    ],
    auth: {
        origin: process.env.NUXT_AUTH_ORIGIN || 'http://localhost:3000',
        baseUrl: '/api/auth',
        enableGlobalMiddleware: true,
        defaultProvider: 'yandex',
        secret: process.env.NUXT_YANDEX_CLIENT_SECRET,
        pages: {
            callback: '/',
        }
    },
    tailwindcss: {
        configPath: '~/tailwind.config.js',
        cssPath: '~/assets/css/tailwind.css',
        viewer: false
    },
    postcss: {
        plugins: {
            '@tailwindcss/postcss': {},
            'autoprefixer': {}
        }
    },
    runtimeConfig: {
        public: {
            yandexFuelKey: process.env.NUXT_YANDEX_FUEL_API_KEY,
            yandexClientId: process.env.NUXT_PUBLIC_YANDEX_CLIENT_ID,
            existApiKey: process.env.NUXT_EXIST_API_KEY,
            jwtSecret: process.env.NUXT_JWT_SECRET,
        },
        yandexClientSecret: process.env.NUXT_YANDEX_CLIENT_SECRET,
    },
    experimental: {
        asyncEntry: true,
        typescriptBundlerResolution: true
    },
    pages: true,
    app: {
        rootId: 'app',
        baseUrl: '/',
        buildAssetsDir: '/_nuxt/build',
        pageTransition: {name: 'page', mode: 'out-in'},
        layoutTransition: {name: 'layout', mode: 'out-in'},
    },
    compatibilityDate: '2025-04-22'
})
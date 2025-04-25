import { NuxtAuthHandler } from '#auth'
import type { OAuthConfig } from 'next-auth/providers/oauth'

const runtimeConfig = useRuntimeConfig()

const YandexProvider = {
    id: 'yandex',
    name: 'Yandex',
    type: 'oauth',
    authorization: {
        url: 'https://oauth.yandex.ru/authorize',
        params: { scope: 'login:email login:info' }
    },
    token: 'https://oauth.yandex.ru/token',
    userinfo: 'https://login.yandex.ru/info',
    clientId: runtimeConfig.public.yandexClientId,
    clientSecret: runtimeConfig.yandexClientSecret,
    profile(profile) {
        return {
            id: profile.id,
            name: profile.real_name || profile.display_name || profile.login,
            email: profile.default_email,
            image: profile.default_avatar_id
                ? `https://avatars.yandex.net/get-yapic/${profile.default_avatar_id}/islands-200`
                : null
        }
    }
} satisfies OAuthConfig<any>

export default NuxtAuthHandler({
    providers: [YandexProvider]
})
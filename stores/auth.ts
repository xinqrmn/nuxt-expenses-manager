import {defineStore} from "pinia";

interface User {
    id: string
    email: string
    name: string
}

interface SessionResponse {
    user?: User
    accessToken?: string
}

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: null as string | null,
        user: null as User | null,
    }),
    actions: {
        async fetchSession() {
            const {data} = await useFetch<SessionResponse>('/api/auth/session');
            this.user = data.value?.user || null;
            this.token = data.value?.accessToken || null;
        },
        async logout() {
            await useFetch('/api/auth/signout');
            this.token = null;
            this.user = null;
        }
    },
    persist: true
})
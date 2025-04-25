import {useAuthStore} from '@/stores/auth'

export default defineNuxtRouteMiddleware(async (to) => {
    const auth = useAuthStore();
    if(!auth.token && to.path !== '/login') {
        await auth.fetchSession()
        if(!auth.token) return navigateTo('/login');
    }
});

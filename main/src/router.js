import VueRouter from 'vue-router';
import MainPage from './mainpage/main'

const router = new VueRouter({
    routes: [{
            path: '/',
            component: MainPage,
            name: 'main'
        }]
})

export default router;
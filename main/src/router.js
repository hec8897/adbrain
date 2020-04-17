import VueRouter from 'vue-router';
import MainPage from './mainpage/main'
import CasePage from './case/main'
import BoardPage from './board/main'
import contact from './contact/main'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: MainPage,
            name: 'main'
        },
        {
            path: '/case',
            component: CasePage,
            name: 'case'
        },
        {
            path: '/board',
            component: BoardPage,
            name: 'board'
        },
        {
            path: '/contact',
            component: contact,
            name: 'contact'
        }
    ]
})

export default router;
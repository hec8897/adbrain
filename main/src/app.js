import './element.scss'
import Header from './common/header'
import router from './router'

new Vue({
    router,
    template: `<div>
                    <app-header/>
                    <router-view />
                </div>`,
    components:{
        'app-header':Header
    }            

}).$mount('#app')
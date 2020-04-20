import './mo-nav.scss'
const MoNav = {
    props:['show'],
    template:`
    <transition name='fade'>
    <div class='mo_nav' v-if='show'>
        <ul>
            <router-link tag='li' to='/about'>에드브레인</router-link>
            <router-link tag='li' to='/business'>사업분야</router-link>
            <router-link tag='li' to='/case'>광고사례</router-link>
            <router-link tag='li' to='/board'>자료실</router-link>
            <router-link tag='li' to='/contact'>광고문의</router-link>
        </ul>
        <div class='com_info_mo'>
            <img src='image/com_phone.png'>
        </div>
    </div>
    </transition>`,
   
}

export default MoNav;
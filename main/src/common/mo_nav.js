const MoNav = {
    props:['show'],
    template:`
    <transition name='fade'>
    <div class='mo_nav' v-if='show'>
        <ul>
            <li><router-link tag='span' to='/about'>에드브레인</router-link></li>
            <li><router-link tag='span' to='/business'>사업분야</router-link></li>
            <li><router-link tag='span' to='/case'>광고사례</router-link></li>
            <li><router-link tag='span' to='/board'>자료실</router-link></li>
            <li><router-link tag='span' to='/contact'>광고문의</router-link></li>
        </ul>
        <div class='com_info_mo'>
            <img src='image/com_phone.png'>
        </div>
    </div>
    </transition>`,
   
}

export default MoNav;
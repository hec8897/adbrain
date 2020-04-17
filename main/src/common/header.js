import './common.scss'
const Header = {
    template:`<header>
                <div class='wrap'>
                    <router-link tag='h1' to='/'><img src='image/ci.png' alt='로고'></router-link>
                    <ul>
                        <router-link to='/about' tag='li'>애드브레인</router-link>
                        <router-link to='/business' tag='li'>사업분야</router-link>
                        <router-link to='/case' tag='li'>광고사례</router-link>
                        <router-link to='/board' tag='li'>자료실</router-link>
                        <router-link to='/contact' tag='li'>광고문의</router-link>
                    </ul>
                    <div class='com_info'>
                        <img src='image/com_phone.png'>
                        <div class='line'></div>
                        <div class='ham_btn'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                    </div>
                </div>
              </header>`
}

export default Header;
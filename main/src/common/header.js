import './common.scss'
import MoNav from './mo_nav'
const Header = {
    template:`<header>
                <mo-nav v-bind:show='Navshow'/>
                <div class='wrap'>
                    <router-link tag='h1' to='/'><img src='image/ci.png' alt='로고'></router-link>
                    <ul class='head_ul'>
                        <li>
                            <router-link to='/about' tag='span'>애드브레인</router-link>
                            <ol class='gnb_mini'>
                                <div class='speech_box'></div>
                                <li><router-link to='/'>회사소식</router-link></li>
                                <li><router-link to='/'>방송광고</router-link></li>
                                <li><router-link to='/'>회사연혁</router-link></li>
                                <li><router-link to='/'>조직도</router-link></li>
                                <li><router-link to='/'>채용공고</router-link></li>
                            </ol>
                        </li>
                        <li>
                            <router-link to='/business' tag='span'>사업분야</router-link>
                            <ol class='gnb_mini'>
                                <div class='speech_box'></div>
                                <li><router-link to='/'>옥외광고</router-link></li>
                                <li><router-link to='/'>방송광고</router-link></li>
                                <li><router-link to='/'>온라인 마케팅</router-link></li>
                            </ol>
                        </li>
                        <li>
                            <router-link to='/case' tag='span'>광고사례</router-link>
                            <ol class='gnb_mini'>
                                <div class='speech_box'></div>
                                <li><router-link to='/'>관공서</router-link></li>
                                <li><router-link to='/'>병의원&middot;한의원</router-link></li>
                                <li><router-link to='/'>분양</router-link></li>
                                <li><router-link to='/'>요양원</router-link></li>
                                <li><router-link to='/'>웨딩홀</router-link></li>
                                <li><router-link to='/'>학교&middot;학원</router-link></li>
                                <li><router-link to='/'>프렌차이즈</router-link></li>
                                <li><router-link to='/'>뷰티</router-link></li>
                                <li><router-link to='/'>기업광고</router-link></li>
                            </ol>
                        </li>
                        <li><router-link to='/board' tag='span'>자료실</router-link></li>
                        <li><router-link to='/contact' tag='span'>광고문의</router-link></li>
                    </ul>
                    <div class='com_info'>
                        <img src='image/com_phone.png'>
                        <div class='line'></div>
                        <div id='nav-icon3' class='ham_btn' @click='NavOpen($event)'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>
                </div>
              </header>`,
              components:{
                  'mo-nav':MoNav
              },
              data(){
                  return{
                    Navshow:false
                  }
              },
              methods: {
                  NavOpen() {
                      const Target = document.getElementById('nav-icon3')

                      this.Navshow == true
                      ?this.Navshow = false:
                      this.Navshow = true

                      Target.className = this.Navshow == true
                      ?'open ham_btn':
                      'ham_btn'
                  },
              },

              
}

export default Header;
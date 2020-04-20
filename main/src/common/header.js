import './header.scss'
import MoNav from './mo_nav'
import EventBus from '../eventbus'

const Header = {
    template:`<header>
                <mo-nav v-bind:show='Navshow'/>
                <div class='wrap'>
                    <router-link tag='h1' to='/'><img src='image/ci.png' alt='로고'></router-link>
                    <ul class='head_ul'>
                        <li>
                            <router-link to='/about' tag='span'>회사소개</router-link>
                            <ol class='gnb_mini'>
                                <div class='speech_box'></div>
                                <li><router-link to='/'>회사소식</router-link></li>
                                <li><router-link to='/'>방송소개</router-link></li>
                                <li><router-link to='/'>회사연혁</router-link></li>
                                <li><router-link to='/'>조직도</router-link></li>
                                <li><router-link to='/'>채용공고</router-link></li>
                            </ol>
                        </li>
                        <li>
                            <router-link to='/business' tag='span'>사업분야</router-link>
                            <ol class='gnb_mini'>
                                <div class='speech_box'></div>
                                <li><router-link to='/'>사업분야1</router-link></li>
                                <li><router-link to='/'>사업분야2</router-link></li>
                                <li><router-link to='/'>사업분야3</router-link></li>
                            </ol>
                        </li>
                        <li>
                            <router-link to='/case/all' tag='span'>광고사례</router-link>
                            <ol class='gnb_mini'>
                                <div class='speech_box'></div>
                                <li><router-link to='/case/사례1'>사례1</router-link></li>
                                <li><router-link to='/case/사례2'>사례2</router-link></li>
                                <li><router-link to='/case/사례3'>사례3</router-link></li>
                                <!-- <li><router-link to='/case/요양원'>요양원</router-link></li> -->
                                <!-- <li><router-link to='/case/웨딩홀'>웨딩홀</router-link></li> -->
                                <!-- <li><router-link to='/case/학교'>학교&middot;학원</router-link></li> -->
                                <!-- <li><router-link to='/case/프렌차이즈'>프렌차이즈</router-link></li> -->
                                <!-- <li><router-link to='/case/뷰티'>뷰티</router-link></li> -->
                                <!-- <li><router-link to='/case/기업광고'>기업광고</router-link></li> -->
                            </ol>
                        </li>
                        <li><router-link to='/board' tag='span'>자료실</router-link></li>
                        <li><router-link to='/contact' tag='span'>광고문의</router-link></li>
                    </ul>
                    <div class='com_info'>
                        <img src='image/com_phone.png'>
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
              mounted(){
                EventBus.$on('NavClose',()=>{
                    this.NavClose()
                    console.log('close')
                })
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
                  NavClose(){
                    const Target = document.getElementById('nav-icon3')
                    this.Navshow = false;
                    Target.className = 'ham_btn'
                  }
              },

              
}

export default Header;
import EventBus from '../eventbus'
import axios from 'axios';
import './default.scss';
const CasePage = {
    props: ['cate'],
    template: `<div class='case'>
                <section class='section1'>
                    <h2>ADVERTISING CASE</h2>
                </section>
                    <section class='section2'>
                        <div class='wrap'>
                            <h2 v-if="cate == 'all'">전체보기</h2>
                            <h2 v-else>{{cate}}</h2>

                            <div class='video'></div>

                            <div class='case_list_area'>
                                <div class='list_tit'>
                                    <span>TOTAL: <b>123</b>건</span>
                                    <div class='inputs'>
                                        <input type='text' placeholder='제목 검색'></input>
                                    </div>
                                </div>
                                <ul class='case_list'>
                                    <li v-for='(list,i) in lists' v-if="limit>i">
                                        <div class='img_area'>
                                            <img v-bind:src='list.ImgRoute'>
                                        </div>
                                    <p class='list_tit'>
                                        <span>{{list.title}}</span>
                                        <span>{{list.InsertDate}}</span>
                                    </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
            </div>`,
    data() {
        return {
            cateTit: "",
            lists: "",
            limit: 9
        }
    },
    created() {
        EventBus.$emit('NavClose',true)
    },
    mounted() {
        const BaseUrl = "data/data.json"
        axios.get(BaseUrl)
            .then((data) => {
                console.log(data)
                this.lists = data.data
            })
            document.addEventListener('scroll', () => {
                this.getDistBottom()
            })
    },
    methods: {
        getDistBottom() {
            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let bottom = Math.max(bodyHeight - (scrollPosition + windowSize), 0)

            if (bottom <= 400) {
                if (this.lists.length <= this.limit) {
                    this.limit += 0
                } else {
                    this.limit += 6
                }
            }
        }
    }
}

export default CasePage;
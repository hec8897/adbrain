import './default.scss'
import EventBus from '../eventbus'

const BoardPage = {
    template: `<div class='board'>
        <section class='section1'>
            <h2>DOWNLOAD</h2>
        </section>
        <section class='section2'>
            <div class='wrap'>
                <h2>자료실</h2>
                <ul>
                    <li>
                        <img src='image/board-section2-li1.png'>
                        <h3>
                            <p>COMPANY BRIEF</p>
                            회사 소개서 다운로드
                        </h3>
                        <div class='down_btn btn'>
                            다운로드
                        </div>
                    </li>
                    <li>
                        <img src='image/board-section2-li2.png'>
                        <h3>
                            <p>BUS ROUTE MAP</p>
                            회사 첨부 양식
                        </h3>
                        <div class='down_btn btn'>
                            다운로드
                        </div>
                    </li>
                    <li>
                        <img src='image/board-section2-li3.png'>
                        <h3>
                            <p>ADVERTISING SIZE</p>
                            회사 첨부 양식
                        </h3>
                        <div class='down_btn btn'>
                            다운로드
                        </div>
                    </li>
                    <li>
                        <img src='image/board-section2-li4.png'>
                        <h3>
                            <p>YOUTUBE</p>
                            유튜브 바로가기
                        </h3>
                        <div class='down_btn btn'>
                            바로가기
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    </div>`,
     created(){
        EventBus.$emit('NavClose',true)
    }
}
export default BoardPage;
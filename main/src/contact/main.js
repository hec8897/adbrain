import './default.scss'
const contact = {
    template: `
    <div class='contact'>
        <section class='section1'>
            <h2>CONTACT</h2>
        </section>
        <section class='section2'>
            <div class='wrap'>
            <h2>광고 문의</h2>
            <div class="privacy">
                        <div class="p_box">
                            <p>금강이앤씨는 개인정보를 중요시 하며 정보통신망 이용촉진 및 정보보호에 관한 법률을 준수하고 있습니다.</p>
                            <ol>
                                <li>
                                    개인정보의 수집목적 <br>
                                    회사는 수집한 개인정보를 상담 문의 목적을 위해 활용합니다.
                                </li>
                                <li>
                                    수집하는 개인정보 항목 <br>
                                    회사는 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다. <br>
                                    수집항목 : 이름, 이메일주소, 휴대폰번호, 전화번호, 그 외 개인이 직접 입력한 내용
                                </li>
                                <li>
                                    수집하는 개인정보의 처리 및 보존기간<br>
                                    회사는 개인정보의 처리목적이 달성될 때까지 개인정보를 보유하고, 목적이 달성된 후에는 지체없이 파기합니다. <br>
                                    다만, 사전동의를 받은 경우 또는 관련 법규에 의하여 보존 필요성이 있는 경우에는 보존할 수 있습니다.
                                </li>
                                <li>
                                    동의 거부 권리 및 동의 거부 시 불이익<br>
                                    고객은 본 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 동의 거부 시 서비스 이용에 제한이 있을 수있습니다.
                                </li>
                            </ol>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="checkbox_1" value="" />
                            <label for="checkbox_1">개인정보수집 및 이용에 동의합니다.</label>
                        </div>
                        
                    </div>

                    <div class="form_area">
                        <div>
                            <p>이름</p>
                            <input type="text" placeholder="이름을 입력하세요" id='reqname'>
                        </div>

                        <div>
                            <p>이메일</p>
                            <input name="" type="text" placeholder="이메일을 입력하세요" id='reqphone'>
                        </div>
                        <div>
                            <p>연락처</p>
                            <input name="" type="text" placeholder="전화번호를 입력하세요" id='reqphone'>
                        </div>

                        <div class='class_select'>
                            <p>분류</p>
                            <div class='selects'>
                            <div class="checkbox">
                                <input type="checkbox" id="class_1" value="" />
                                <label for="class_1">버스외부광고</label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="class_2" value="" />
                                <label for="class_2">버스내부광고</label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="class_3" value="" />
                                <label for="class_3">지하철광고</label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="class_4" value="" />
                                <label for="class_4">옥탑광고</label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="class_5" value="" />
                                <label for="class_5">기타광고</label>
                            </div>
                        </div>
                        </div>

                        <div class="txt">
                            <p>문의내용</p>
                            <textarea name="" placeholder="내용을 입력하세요." id='reqmemo'></textarea>
                        </div>
                    </div>

                    <div class='btn sub_btn'>광고문의 신청하기</div>
                    </div>
        </section>

    </div>`
}

export default contact;
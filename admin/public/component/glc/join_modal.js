import eventBus from './eventbus.js';

const joinModal = {
    template: `<div class="pop-window fade" id="modal-join">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons blue">error_outline</i>
                        <p>패스워드 변경</p>
                        <ul class='inputs' v-if="this.mode === 'chpw'">
                            <form>
                            <li>
                                <input type='password' id='reqpassword' placeholder='변경하실 패스워드'>
                            </li>
                            <li>
                                <input type='password' id='reqpassword_re' placeholder='변경하실 패스워드 확인'>
                            </li>
                            </form>
                        </ul>
                        <ul class='inputs' v-else-if="this.mode === 'cflag'">
                            <form>
                            <li>
                                <select disabled>
                                    <option>배정팀(비활성화)</option>
                                </select>
                            </li>
                            <li>
                         
                                <select>
                                    <option>배정할 상담사</option>
                                </select>
                            </li>
                         
                            </form>
                        </ul>
                    </div>

                    <div class="modal_foot">
                    </div>
                </div>
            </div>`
 
}

export default joinModal;
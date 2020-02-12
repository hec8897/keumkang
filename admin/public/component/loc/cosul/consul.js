import ConsulView from './consul-table.js'

const Consul = {
    template:`
    <div class="con_wrap">
        <div class='content consul_bord'>
            <h2>상담신청</h2>
            <consul-table></consul-table>
            <div>
            </div>
        </div>
    </div>`,
    components:{
        'consul-table':ConsulView
    }
}

export default Consul;
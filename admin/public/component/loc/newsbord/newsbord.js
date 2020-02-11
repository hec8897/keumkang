import newsTable from './news-table.js';
const NewsBord = {
    template:`
    <div class="con_wrap">
        <div class='content new_bord'>
            <h2>보도 자료</h2>
                <news-bord></news-bord>
        </div>
    </div>`,
    components:{
        'news-bord' : newsTable
    }
    // components:{
        // 'news-bord':newsTable
    // }
}

export default NewsBord;



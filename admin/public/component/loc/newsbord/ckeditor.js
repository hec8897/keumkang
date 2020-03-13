import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
// import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';

Vue.use(CKEditor);

const CkeditorCustom = {
    template:`<div>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>`,
    components:{
        'ckeditor':CKEditor.component
    },
    data(){
        return{
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                plugins: [
                    // EssentialsPlugin
                ],
                // The configuration of the editor.
            }
        }
    }
    
}

export default CkeditorCustom;
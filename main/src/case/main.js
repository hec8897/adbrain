import EventBus from '../eventbus'
const CasePage = {
    template:`<div>광고사례</div>`,
    created(){
        EventBus.$emit('NavClose',true)
    }
}

export default CasePage;
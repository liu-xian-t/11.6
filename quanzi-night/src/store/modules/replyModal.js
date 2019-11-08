import {publishReply,publishComment} from "../../service/index"
const state={
    info:{},
    show:false
}
const mutations={
    showModal(state, payload){
        state.info = payload.info;
        state.show = true;
    },
    // 隐藏弹框
    hideModal(state, payload){
        state.info = {};
        state.show = false
    }
}
const actions={
    async publishReply({commit,state,dispatch},paload){
        console.log("payload...",payload,state.info)
        let data = {};
        if (state.info.type === 'comment'){
            data = await publishComment({
                dynamicid: state.info.dynamicid,
                commentContent: payload
            })
        }else{
            data = await publishReply({
                toCommentReplyid: state.info.toCommentReplyid,
                replyContent: payload
            })
        }
    }
}

export default {
    namespaced: true,
    state,
    actions, 
    mutations
}
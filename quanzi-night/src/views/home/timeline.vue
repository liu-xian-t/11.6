<template>
    <div class="timeline">
     <div class="head">
       <input type="text">
     </div>
     <div class="main">
      <div class="list">
         <div class="item">
          <div class="item-top">
             <div class="img">
                 <img src="../../../public/v2-2c08acb37bdbf9d2f33ae3d502c8c72f_hd.jpg" alt="">
             </div>
             <p class="p1">于威</p> 
          </div>
          <div class="item-center">
             <div class="pic">
                   <img src="../../../public/v2-8c43ceaaf5c5a7aec35b5846729b8d8c_hd.jpg" alt="">
             </div>
             <div class="pic">
                   <img src="../../../public/v2-ede4d5d87fc0536900f6bab80cddc0de_hd.jpg" alt="">
             </div>
          </div>
          <p class="p-h">一家人吃烧烤真开心</p>
          <div class="item-foot">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zan"></use>
           </svg>
           <span class="sp">35</span>
            <svg class="icons" aria-hidden="true">
                <use xlink:href="#icon-pinglun1"></use>
           </svg>
           <span class="sp">3</span>
          </div>
         </div>
            <div class="item">
          <div class="item-top">
             <div class="img">
                 <img src="../../../public/v2-2c08acb37bdbf9d2f33ae3d502c8c72f_hd.jpg" alt="">
             </div>
             <p class="p1">于威</p> 
          </div>
          <div class="item-center">
            <div class="pic">
                   <img src="../../../public/v2-8c43ceaaf5c5a7aec35b5846729b8d8c_hd.jpg" alt="">
             </div>
             <div class="pic">
                   <img src="../../../public/v2-ede4d5d87fc0536900f6bab80cddc0de_hd.jpg" alt="">
             </div>
          </div>
          <p class="p-h">一家人吃烧烤真开心</p>
          <div class="item-foot">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zan"></use>
           </svg>
           <span class="sp">35</span>
            <svg class="icons" aria-hidden="true">
                <use xlink:href="#icon-pinglun1"></use>
           </svg>
           <span class="sp">3</span>
          </div>
           <Reply :reply="item.comments"/>
         </div>
      </div>
     </div>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from "vuex"
import Reply from "../../components/reply"
import ReplyModal from "../../components/replyModal"
export default {

    name:"timeline",
    props:{

    },
    components:{
         Reply,
        ReplyModal
    },
    data(){
        return {
            
        }
    },
    computed:{
         ...mapState({
            list: state=>state.timeline.list
        })
    },
    methods:{
       ...mapActions({
            getTimeline: 'timeline/getTimeline'
        }),
        ...mapMutations({
            showModal: 'replyModal/showModal'
        }),
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped>
     .timeline{
         width: 100%;
         height: 100%;
         display: flex;
         flex-direction: column;
     }
     .head{
         width: 100%;
         height: 50px;
         text-align: center;
         line-height: 50px;
     }
     .head input{
         width: 80%;
         height: 60%;
         border: none;
         border-radius: 22px;
         background: #eee;
     }
     .main{
         flex: 1;
     }
     .main .item{
         width: 90%;
         height: 220px;
         margin-top:10px;
         margin-left: 20px;
         border-bottom: 1px solid red;
     }
     .item .item-top{
         width: 100%;
         height: 50px;
         line-height: 50px;
     }
     .item-top .img{
         width: 45px;
         height: 45px;
         background: #ccc;
         border-radius: 50%;
         float: left;
         margin-left:10px;
     }
     .img img{
         width: 100%;
         height: 100%;
         border-radius: 50%;
     }
     .item-top .p1{
         float: left;
         margin-top:-10px;
         margin-left: 10px;
     }
     .item .item-center{
         width: 100%;
         height: 100px;
     }
     .item-center .pic{
         width:120px;
         height: 80px;
         background: skyblue;
         float: left;
         margin-left: 10px;
     }
     .item-center .pic img{
         width: 100%;
         height: 100%;
     }
     .p-h{
         margin-left:10px;
     }
     .item-foot{
         width: 100%;
         height: 50px;
     }
      .icon {
        width:30px;
        height:30px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        margin-left:10px;
        margin-top:10px;
        float: left;
    }
    .icons {
        width:25px;
        height:25px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        margin-left:249px;
        margin-top:15px;
        float: left;
    }
    .sp{
       margin-top:-10px;
       float: left;
        margin-top:15px;
    }
</style>
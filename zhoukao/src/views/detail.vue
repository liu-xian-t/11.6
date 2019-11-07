<template>
    <div class="detail">
        <h1>{{item.title}}</h1>
        <p>{{item.content}}</p>
        <!-- <div class="xin">
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangqu"></use>
          </svg>
        </div> -->
        <button class="collect" @click="collect(item)">收藏</button>
        <button class="collect" @click="uncollect(item.id)">取消收藏</button>
        <button class="collect" @click="date(item)">我的收藏</button>
    </div>
</template>
<script>
import {mapMutations,mapState} from "vuex"
export default {
    name:"detail",
    props:{
        
    },
    components:{

    },
    data(){
        return {
         item:{},
         changeRed:-1
        }
    },
    computed:{
       ...mapState(["list"])
    },
    methods:{
      ...mapMutations(["collect","uncollect"]),
      date(item){
          this.$router.push({path:"/collect",query:item})
      }

    },
    created(){

    },
    mounted(){
        this.item=this.$route.query
    }
}
</script>
<style scoped>
    .detail{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .xin{
        width: 100%;
        height: 100px;
        position: fixed;
        top:93%
    }
    .icon {
        width:40px;
        height:40px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        margin-left:20px;
    }
    .collect{
        width: 100%;
        height: 50px;
        border: none;
        margin-top:30px;
        background: salmon;
    }
</style>  
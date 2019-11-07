<template>
    <div class="onepage">
      <div class="nav">
          <!-- 三级 -->
            <h3 :class="{'sp':true,active:currentIndex==index}" @click="saveIndex(index)" v-for="(item,index) in list" :key="index">{{item.navTitle}}</h3>
      </div>
      <div class="list" v-if="list.length>0">
         <div class="content" v-for="(item,index) in list[currentIndex].contents" :key="index" @click="date(item)">
               <div class="top">
                   <!--渲染 -->
                 <h3>{{item.title}}</h3>
               </div>
               <div class="cont">
                 <p>{{item.content}}</p>
               </div>
           </div>
      </div>
    </div>
</template>
<script>
import axios from "axios"
import "../../mock/mock"
export default {
    name:"onepage",
    props:{

    },
    components:{

    },
    data(){
        return {
           list:[],
           currentIndex:0,
        }
    },
    computed:{

    },
    methods:{
       saveIndex(index){
         this.currentIndex=index
       },
       date(item){
           this.$router.push({path:"/detail",query:item})
       }
    },
    created(){
      axios.get('/api').then(res=>{
          this.list=res.data.list
      })
    },
    mounted(){

    }
}
</script>
<style scoped>
   .nav{
       width: 100%;
       height: 50px;
       display: flex;
       flex-direction: row;
       justify-content: space-around;
       line-height: 50px;
   }
   a{
       color:#ccc;
       font-size: 20px;
       font-weight: bold;
   }
   .router-link-active{
       color: black;
   }
   .content{
        width: 100%;
        height: 150px;
    }
    .content .top{
        padding-top:20px;
        margin-left: 10px;
    }
    .content .cont{
        padding-top:15px;
         margin-left: 10px;
    }
   .active{
       color: skyblue;
   }
</style>
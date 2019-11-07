<template>
    <div class="zhu">
       <div class="list">
           <!--列表 -->
           <div class="content" v-for="(item,index) in list " :key="index" @click="date(item)"><!-- 点击事件-->
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
import "../../mock/mock"
import axios from "axios"
export default {
    name:"zhu",
    props:{

    },
    components:{

    },
    data(){
        return {
          list:[],
        }
    },
    computed:{

    },
    methods:{
        //点击跳详情
       date(item){
        //  this.$router.push({path:`/detail${item.id}`,query:{item:item}})
        this.$router.push({path:"/detail",query:item})
       } 
    },
    created(){
      axios.get("/api").then(res=>{
          this.list=res.data.list
      })
    },
    mounted(){
    
    }
}
</script>
<style scoped>
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
</style>
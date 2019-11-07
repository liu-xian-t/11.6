<template>
    <div class="home">
       <div class="box">
          <div v-for="(item,index) in list " :key="index">{{item.content}}
            <p class="p1" v-for="(item,index) in list " :key="index">{{item.contents}}</p>
          </div>
       </div>
    </div>
</template>
<script>
import axios from "axios"
import "../mock/mock"
export default {
    name:"home",
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
     .box{
         margin-left:50px;
         margin-top:20px;
     }
    .p1{
        margin-left: 20px;
    }
</style>
<template>
    <div class="home">
      <div class="head">
        <input type="text">
        <span>提问</span>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="footer">
          <!--二级-->
          <router-link to="/home/onepage">
                <span>首页</span>
          </router-link>
           <router-link to="/home/dream">
                <span>思考</span>
          </router-link>
           <router-link to="/home/school">
                <span>大学</span>
          </router-link>
           <router-link to="/home/message">
                <span>消息</span>
          </router-link>
           <router-link to="/home/mine">
                <span>我的</span>
          </router-link>
      </div>
    </div>
</template>
<script>
export default {
    name:"home",
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped>
    .home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .head{
        width: 100%;
        height: 65px;
        line-height: 50px;
    }
    .head input{
         width: 75%;
         height: 40px;
         background: #eee;
         border: none;
         margin-left:10px;
         float: left;
         margin-top:10px;
    }
    .head span{
        float: left;
       margin-left: 20px;
       font-size: 20px;
       color: skyblue;
       margin-top:5px;
    }
    .main{
        flex: 1;
    }
    .footer{
        width: 100%;
        height: 50px;
        line-height: 50px;
        display: flex;
        justify-content: space-around;
        position: fixed;
        top:93.5%;
        background: white;
    }
    a{
        color: #cccccc;
    }
    .router-link-active{
        color: blue;
    }
</style>
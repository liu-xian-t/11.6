<template>
    <div class="register">
      <div class="head">
          <router-link to="/login" tag="span" class="sp">
             &lt;
          </router-link>
          <p>圈子登录</p>
       </div>
       <div class="main">
          <input class="ipt1" type="text" placeholder="用户名" v-model="userName">
          <input class="ipt2" type="text" placeholder="密码" v-model="userPwd">
          <button @click="register">注册</button>
       </div>
       <div class="footer">
         
       </div>
    </div>
</template>
<script>
import {register} from '../../service/index'
export default {
    name:"register",
    props:{

    },
    components:{

    },
    data(){
        return {
          userName:'',
          userPwd:''
        }
    },
    computed:{

    },
    methods:{
        async register(){
            let {userName, userPwd} = this;
            let result = await register({userName, userPwd})
            console.log('result...', result);
            if (result && result.data.code === 0){
                alert(result.data.msg)
            }else{
                window.history.back();
            }
        }
    },
    created(){
         
    },
    mounted(){

    }
}
</script>
<style scoped>
    .register{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .head{
        width: 100%;
        height: 50px;
        background: #eee;
        text-align: center;
        line-height: 50px;
    }
    .head p{
        font-size: 18px;
        float: left;
        margin-left: 140px;
    }
    .head .sp{
        font-size: 15px;
        float: left;
        margin-left: 20px;
    }
    .main{
        flex: 1;
        text-align: center;
    }
    .main .ipt1{
        width: 90%;
        height: 45px;
        background: #eee;
        border: none;
        margin-top:20px;
    }
    .main .ipt2{
        width: 90%;
        height: 45px;
        background: #eee;
        border: none;
        margin-top:20px;
    }
    button{
        width: 90%;
        height: 45px;
        background: tomato;
        border: none;
        color: white;
        margin-top:20px;
    }
    .footer span{
         font-size: 15px;
    }
</style>
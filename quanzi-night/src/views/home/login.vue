<template>
    <div class="login">
        <router-view></router-view>
       <div class="head">
          <p>圈子登录</p>
       </div>
       <div class="main">
          <input class="ipt1" type="text" placeholder="用户名" v-model="userName" @blur="checkUserName">
          <input class="ipt2" type="mes" placeholder="密码" v-model="userPwd">
          <svg class="icon" aria-hidden="true">
                <use xlink:href="icon-changyongicon"></use>
          </svg>
          <button  @click="login">登录</button>
          <router-link to="/register" tag="span">
              没有账号，快速注册
          </router-link>
       </div>
       <div class="footer">
          <p class="p1">———————</p>
          <p class="p2">第三方登录</p>
          <p class="p3">———————</p>
          <div class="box-tt">
           <div class="tt">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ"></use>
            </svg>
           </div>
           <div class="tt">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
            </svg>
           </div>
           <div class="tt">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weibo"></use>
            </svg>
           </div>
          </div>
       </div>
    </div>
</template>
<script>
import {login} from "../../service/index"
export default {
    name:'login',
    props:{

    },
    components:{

    },
    data(){ 
        return {
          userName:'',
          userPwd:'',
        }
    },
    computed:{

    },
    methods:{
         async login(){
            let {userName, userPwd} = this;
            let result = await login({userName, userPwd});
            console.log('result...', result);
            if (result && result.data.code === 1){
                // 登陆完成，执行后续跳转逻辑
                window.sessionStorage.setItem('isLogin', 'true');
                this.$router.replace('/');
            }
            // this.$toast(result.data.msg);
        },
        checkUserName(){
            if (!/\w{3,20}/.test(this.userName)){
                this.$toast('请输入正确的用户名');
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
    .login{
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
    }
    .main{
        flex: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .main .ipt1{
        width: 90%;
        height: 45px;
        background: #eee;
        border: none;
        margin-left: 20px;
        margin-top:30px;
    }
    .main .ipt2{
        width: 90%;
        height: 45px;
        background: #eee;
        border: none;
        margin-left: 20px;
        margin-top:20px;
    }
    .main span{
        font-size: 15px;
        margin-right: 240px;
        margin-top:20px;
        color: black;
    }
    button{
        width: 90%;
        height: 45px;
        background: tomato;
        border: none;
        color: white;
         margin-left: 20px;
        margin-top:30px;
    }
    .footer{
        width: 100%;
        height: 100px;
         font-size: 15px;
    }
    .footer .p1{
        float: left;
        margin-left: 55px;
        color: #ccc;
    }
    .footer .p2{
        float: left;
        color: #ccc;
    }
    .p3{
        color: #ccc;
    }
    .footer .box-tt{
        width: 100%;
        height: 80px;
    }
    .box-tt .tt{
        width: 40px; 
        height: 40px;
        border-radius: 50%;
        float: left;
        margin-left: 70px;
        margin-top:15px;
    }
    .icon {
        width:40px;
        height:40px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        }
</style>
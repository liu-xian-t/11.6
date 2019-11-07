<template>
    <div class="collect">
        <div class="coll" v-for="(item,index) in list " :key="index">
            <h3>{{item.title}}</h3>
            <p>{{item.content}}</p>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    name:"collect",
    props:{

    },
    components:{

    },
    data(){
        return {
           item:{}
        }
    },
    computed:{
       ...mapState(["list"])
    },
    methods:{

    },
    created(){

    },
    mounted(){
       this.item=this.$route.query
    }
}
</script>
<style scoped lang="">

</style>
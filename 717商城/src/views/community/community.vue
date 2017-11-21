<template>
    <div class="warp">
        <router-view class="wrap"></router-view>

         <div class="footer">
             <router-link :to="{name:'home'}" tag="div">
                <em class="icon iconfont icon-home"></em>
                <sub>首页</sub>
            </router-link>
            <router-link :to="{name:'Native'}" tag="div">
                <em class="icon iconfont icon-apps"></em>
                <sub>家乡美</sub>
            </router-link>
             <router-link :to="{name:'My_tidings'}" tag="div">
                 <em class="icon iconfont icon-apps"></em>
                <sub>我的动态</sub>
            </router-link>
            <router-link :to="{name:'chat_room'}" tag="div">
                <em class="icon iconfont icon-cart"></em>
                <sub>聊天</sub>
            </router-link>
                
            <router-link :to="{name:'message'}" tag="div">
                <em class="icon iconfont icon-people"></em>
                <sub>消息</sub>
            </router-link>

        </div> 
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
           
        }
    },
      methods:{
       community() {
            this.$router.push('/qunliao')
        }
   }

}

</script>  
<style scoped>
* {
    margin: 0;
    padding: 0;
    font-size: .26rem;
    font-family: 微软雅黑;
}
.warp{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    background: #eee;
}
.footer{
       height: 0.98rem;
        text-align: center;
        display: table;
        width: 100%;
        border-top: 1px solid #eee;
        line-height: 0.4rem;
        background: #fff;
        display: -webkit-flex;
        -webkit-justify-content: space-around;
        position: relative
}
.footer div{
        display: table-cell;
        width: 25%;
}
.footer icon{
       font-size: .90rem;
        line-height: 0.6rem;
}
.footer em,
.footer sob{
      display: block;
      width: 100%;
      font-size: .35rem;
}
  .router-link-active {
        color: #ff0000;
    }

</style>    
<template>
    <div class="wrap">  
        <header class="header">
             <router-link :to="{name:'qunliao'}" tag="span">
                <sub>群聊</sub>
            </router-link>
              <router-link :to="{name:'siliao'}" tag="span">
                <sub>私聊</sub>
            </router-link>
        </header>
        <main class="main">
            <router-view></router-view> 
        </main>
     </div> 
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
           
        }
    }
}

</script>  
<style>
* {
    margin: 0;
    padding: 0;
    font-size: .22rem;
    font-family: 微软雅黑;
}
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column
}
.header {
    width: 100%;
    height: .90rem;
    background: #fff;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    align-items: center;
    display: flex;
}

.main {
    -webkit-flex: 1;
    overflow: hidden;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
}


</style>    
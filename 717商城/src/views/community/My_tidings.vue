<template>
    <div class="wrap">  
        <header class="header">
           我的动态
        </header>
        <main class="main">
         我的动态
        </main>
     </div> 
</template>
<script>
export default {
    data() {
        return {
           
        }
    }
}

</script>  
<style scoped>
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
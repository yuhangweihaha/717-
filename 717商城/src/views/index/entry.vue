<template>
    <div class="container">
        <router-view class="wrap"></router-view>

        <nav>
            <router-link :to="{name:'home'}" tag="span">
                <em class="icon iconfont icon-home"></em>
                <sub>首页</sub>
            </router-link>
            <router-link :to="{name:'catagory'}" tag="span">
                <em class="icon iconfont icon-apps"></em>
                <sub>分类</sub>
            </router-link>
            <router-link :to="{name:'community'}" tag="span">
            </router-link>
            <router-link :to="{name:'cart'}" tag="span">
                <em class="icon iconfont icon-cart"></em>
                <sub>购物车</sub>
            </router-link>

            <router-link :to="{name:'mine'}" tag="span">   
                <em class="icon iconfont icon-people"></em>
                <sub>我的</sub>
            </router-link>

        </nav>

        <div class="community" @click="community">

            <sub>社区</sub>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            community() {
                this.$router.push({ name: 'community' })
            }
        }
    }

</script>
<style>
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .wrap {
        flex: auto;
    }

    nav {
        height: 0.98rem;
        text-align: center;
        display: table;
        width: 100%;
        border-top: 1px solid #eee;
        line-height: 0.4rem;
        display: -webkit-flex;
        -webkit-justify-content: space-around;
        position: relative
    }

    nav span {
        display: table-cell;
        width: 25%;
        font-size: .25rem;
    }

    nav .icon {
        font-size: 0.46rem;
        line-height: 0.6rem;
    }

    nav em,
    nav sub {
        display: block;
        width: 100%;
    }

    nav .icon {
        height: 0.5rem;
    }

    .router-link-active {
        color: #ff0000;
    }

    .community {
        width: 53px;
        height: 50px;
        background: #FE5F6B;
        border-radius: 50%;
        margin-top: 1%;
        color: #fff;
        line-height: 50px;
        position: absolute;
        left: 43%;
        top: 92%;
        text-align: center;
        font-size: .27rem;
    }
</style>
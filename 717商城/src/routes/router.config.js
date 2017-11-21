import Vue from 'vue'
import VueRouter from 'vue-router'
import entry from '../views/index/entry.vue'
import home from '../views/home/home.vue'
import community from '../views/community/community.vue'
 import qunliao from '../views/community/qunliao.vue'
 import siliao from '../views/community/siliao.vue'
 import Native from '../views/community/Native.vue'
 import chat_room from '../views/community/chat_room.vue'
 import message from '../views/community/message.vue'
 import My_tidings from '../views/community/My_tidings.vue'
import catagory from '../views/list/list.vue'
import cart from '../views/cart/cart.vue'
import mine from '../views/mine/mine.vue'
import addres from '../views/addres/addres.vue'
import search from '../views/search/search.vue'
import result from '../views/searchresult/result.vue'
import shop from '../views/shop/shop.vue'
import login from '../views/login/login.vue'
import site from '../views/addresslist/site.vue'



Vue.use(VueRouter);

let routes = [
    {
        path:'*',
        redirect:'/entry/home'
    },
    {
        path:'/entry/catagory',
        redirect:'/entry/catagory/0'
    },

    {
        name:'entry',
        path:'/entry',
        component:entry,
        children:[
            {
                name:'home',
                path:'home',
                component:home
            },
            {
                name:'catagory',
                path:'catagory/:index?',
                component:catagory
            },
            {
                name:'cart',
                path:'cart',
                component:cart
            },
            {
                name:'mine',
                path:'mine',
                component:mine,
                meta:{
                    username:''
                }
          
            },
            {
                name:'result',
                path:'result',
                component:result
            },
            {
                name:'addres',
                path:'/addres/:id?',
                component:addres
            }
        ]
    },
    {
        name:'search',
        path:'/search',
        component:search
    },
    {
        name:'shop',
        path:'/shop',
        component:shop
    },
     {
        path:'/community',
        redirect:'/community/chat_room/qunliao'
    },
     {
        path:'/community/chat_room',
        redirect:'/community/chat_room/qunliao'

    },
    {
        name:'community',
        path:'/community',
        component:community,
        children:[
                   {
                    name:'chat_room',
                    path:'chat_room',
                    component:chat_room, 
                    children:[
                        {
                        name:'qunliao',
                        path:'qunliao',
                        component:qunliao  
                        },
                        {
                        name:'siliao',
                        path:'siliao',
                        component:siliao
                        }
                    ] 
                    },
                 {
                 name:'Native',
                 path:'Native',
                 component:Native
                    },
                 {
                 name:'message',
                 path:'message',
                 component:message
                    },
                 {
                 name:'My_tidings',
                 path:'My_tidings',
                 component:My_tidings
                    }
                ]
    },
            
    {
        name:'login',
        path:'/login',
        component:login
    },
    {
        name:'site',
        path:'/site',
        component:site
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach(function(to,from,next){
    if(to.name=='login'){
        next()
        return;
    }
    if(to.name=='mine'){
        let meta = to.matched.some((info)=>{info.meta.username});
        //if(to.matched.some((info)=>{info.meta.username})
        let cookie_list = document.cookie.split(';')
        let tocken=null;
        for(let i=0;i<cookie_list.length;i++){
            if(cookie_list[i].indexOf('1505B-tocken')>-1){
                tocken=cookie_list[i].split('=')[1]
            }
        }
        
        if(!tocken){
            next({
                path:'/login'
            })
        }else{
            next()
        }
    }else{
        next()   
    }
    
     
})

export default router
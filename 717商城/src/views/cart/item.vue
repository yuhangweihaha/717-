<template>
	<div class="shop">
		<header class="head">
			<i class="iconfont icon-back"></i>
			<b>购物车</b>
			<span @click="change_edit">
				{{edit}}
				<i class="iconfont icon-message"></i>
			</span>
		</header>

		<div class="main">
			<div class="cart_main">
				<div class="empt_box" v-if="if_has_items">
					<div class="empt_imgs"><img src="../../assets/1.png" alt=""></div>
					<p>购物车为空</p>
					<router-link :to="{name:'home'}"><span>去逛逛</span></router-link>
				</div>

				<div class="shop_list" v-else>
					<item-comp v-for="x in cart_list" :info="x" :key="x.id" @get_id="get_id"></item-comp>
				</div>
			</div>
			<!-- <h1 class="hot">热门推荐</h1> -->
			<div class="hot_list">
				热门推荐
			</div>
			<div class="bottom">
				到底了噢！
			</div>
		</div>

		<div class="foot">
			<div class="foot_left">
				<div class="btns icon iconfont" :class="{'icon-check':check_all}" @click="selected_all"></div>
				<span>全选</span>
			</div>
			<div class="foot_right">
				<div class="total">
					<p>
						<span>合计：</span>
						<span class="price_total">{{get_selected}}</span>
					</p>
					<b>运费：0.00</b>
				</div>
				<button type="button" @click="del"> {{edit2}}</button>
			</div>
		</div>
	</div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
import item from './item.vue'
export default {
	data() {
		return {
      if_has_items:true,
      check_all:false,
      edit:"编辑",
	  edit2:"结算",
	  flag:true,
	  edit_list:[] 
		}
	},
	created() {

  },
  components:{
    "item-comp":item
  },
  computed:{
    ...mapState(['cart_list']),
    ...mapGetters(['get_selected'])
  },
  methods:{
    selected_all(){
      this.check_all = !this.check_all;
      this.$store.commit('check_all',this.check_all);
      //console.log(this.$store.state.cart_list)
    },
    change_edit(){
			
			if(this.flag){
				this.edit="完成"
				this.edit2="删除"
				this.flag=false;
			}else{
				this.edit="编辑"
				this.edit2="结算"
				this.flag=true;
			}
			
	},
	get_id(obj){
			//console.log(obj);
			let flag=true
			this.edit_list.forEach((val)=>{
				if(val.id==obj.id){
					val.selected=obj.selected;
					flag=false
				}
			})

			if(flag){
				this.edit_list.push(obj)
			}

			
			
		
		},
		del(){
			if(!this.flag){
				for(let i=0;i<this.cart_list.length;i++){
					for(let j=0;j<this.edit_list.length;j++){
						if(this.cart_list[i].id==this.edit_list[j].id){
							//console.log(this.cart_list[i])
							this.cart_list.splice(i,1)
						}
					}
				}
			}
			
			//console.log(this.cart_list)
		}
  },
  mounted(){
	   if(this.cart_list.length>0){
	     this.if_has_items = false
	   }

  }
}
</script>
<style scoped>
.shop{
	background: #f5f5f5;
    display:flex;
    flex-direction: column;
    width:100%;
    height:100%;

}

.head {
	width: 100%;
	height: 0.88rem;
	line-height: 0.88rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #eee;
	padding: 0 8px;
	text-align: center;
	flex-shrink: 0;
	font-size: 0.22rem;
  
}

.head span i {
	padding-left: 10px;
}

.head b {
	padding-left: 28px;
	font-weight: normal;
}

.main {
	width: 100%;
  flex:1;
	overflow: hidden;
	overflow-y: auto;
}

.bottom {
	width: 100%;
	height: .7rem;
	line-height: .8rem;
	font-size: 0.3rem;
	color: #666;
	text-align: center;
}

.empt_box {
	width: 100%;
	height: 4.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
	flex-direction: column;
	margin-bottom:10px;
}

.empt_imgs {
	width: 1.36rem;
	height: 1.36rem;
}

.empt_imgs img {
	display: block;
	width: 100%;
}
.empt_box span{
	border:1px solid red;
	padding:5px 8px;
	margin-top:8px;
	border-radius:5px;
	color:red
}
.empt_box p{
	line-height: 30px;
	color:#666;
}

.foot {
	width: 100%;
	height: 0.94rem;
	background: #fff;

	border-top: solid 0.02rem #e5e5e5;
	border-bottom: solid 0.02rem #e5e5e5;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 0.2rem;
}

.foot_left {
	display: flex;
	flex-shrink: 0;
}

.foot_left span {
	font-size: 0.32rem;
	color: #333;
}

.foot_right button {
	width: 2.55rem;
	height: 100%;
	display: block;
	background: #fc4141;
	font-size: 0.32rem;
	color: #fff;
	outline: none;
	border: none;
	flex-shrink: 0;
}

.foot_right {
	display: flex;
	height: 100%;
	justify-content: flex-end;
	align-items: center;
}

.total {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 0.3rem;
}

.total b {
	font-weight: normal;
	font-size: 0.24rem;
	display: block;
	color: #666;
}

.total p {
	color: #333;
	font-size: 0.28rem;
	display: flex;
}

.price_total {
	color: #fc4141;
}

.total p span {
	display: block;
	line-height: 0.4rem;
}

.shop_list {
	width: 100%;
}
.btns {
	width: 0.45rem;
	height: 0.45rem;
	font-size: 0.3rem;
	line-height: 0.42rem;
	border: solid 0.02rem #cccccc;
	border-radius: 50%;
	overflow: hidden;
	text-align: center;
	color: #fff;
	margin-right: 0.12rem;
}
.icon-check {
	background: #fc4141;
}
.hot_list{
	width: 100%;
	height: .88rem;
	text-align: center;
	font-weight: 600;
	font-size: 16px;
	background: #fff;
	line-height: .88rem;
}
</style>
宋亚梅 20:13:29
<template>
    <div class="list_b">
        <div class="btns icon iconfont" :class="{'icon-check':selected}"@click="checked"></div>
        <div class="imgs"><img :src="info.url" alt=""></div>
        <div class="info">
            <p class="text">{{info.name}}</p>
            <div class="price_btn">
                <div class="price_left">
                    <b>×{{item_count}}</b>
                    <p><span>￥ </span>{{info.price}}</p>
                </div>
                <div class="count_b">
                    <span class="reduce icon iconfont icon-move" @click="minus"></span>
                    <span class="count">{{item_count}}</span>
                    <span class="plus icon iconfont icon-add" @click="add"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['info','select_all'],
    data() {
        return {
            selected: false,
            item_count:1
        }
    },
    created(){
        //this.selected = this.$store.
    },
    methods: {
        // select_fn(idx) {
        //     this.selected = !this.selected;
        // },
        add(){
            this.item_count++;
            this.$store.commit('change_count',[this.info.id,this.item_count])
            
        },
        minus(){
            this.item_count--;
            this.$store.commit('change_count',[this.info.id,this.item_count])
        },
        checked(){		
			this.selected = !this.selected;
			//console.log(this.addClass)
			
				this.$emit("get_id",{id:this.info.id,selected:this.selected})
			
			
			
		}
    },
    watch:{
        select_all:function(n){
            this.selected = n;
        },
        selected:function(n){
            this.$store.commit('selected_item',[this.info.id,n])
        }
    },
    mounted(){
        this.item_count = this.info.count
    }
}
</script>
<style scoped>

.list_b {
	width: 100%;
	display: flex;
    align-items: center;
    
	height: 2.62rem;
	background: #fff;
	margin-bottom: 0.2rem;
	border-bottom: solid 0.02rem #e5e5e5;
	padding: 0.3rem 0.3rem 0.3rem 0.2rem;
}

.imgs {
	width: 2.04rem;
	height: 100%;
	overflow: hidden;
	border: solid 0.02rem #cccccc;
	margin-right: 0.2rem;
}

.imgs img {
	display: block;
	width: 100%;
}

.info {
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0.1rem 0;
}

.text {
	width: 100%;
	line-height: 0.4rem;
	font-size: 0.22rem;
	color: #333;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	flex-shrink: 0;
}

.price_btn {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}

.price_left p {
	font-size: 0.3rem;
	line-height: 0.34rem;
	color: #fc4141;
}

.price_left p span {
	font-size: 0.26rem;
}

.price_left b {
	font-weight: normal;
	font-size: 0.26rem;
	line-height: 0.34rem;
	color: #666666;
}

.count_b {
	display: flex;
	justify-content: flex-end;
}

.count_b span {
	display: block;
	height: 0.62rem;
	border: solid 0.02rem #e4e4e4;
	width: 0.6rem;
	line-height: 0.6rem;
	text-align: center;
	font-size: 0.3rem;
}

.reduce {
	border-radius: 0.08rem 0 0 0.08rem;
}

.count {
	width: 0.9rem;
	border-right: none;
	border-left: none;
}

.plus {
	border-radius: 0 0.08rem 0.08rem 0;
}
.btns {
	width: 0.45rem;
	height: 0.45rem;
	font-size: 0.3rem;
	line-height: 0.42rem;
	border: solid 0.02rem #cccccc;
	border-radius: 50%;
	overflow: hidden;
	text-align: center;
	color: #fff;
	margin-right: 0.12rem;
}

.icon-check {
	background: #fc4141;
}
</style>
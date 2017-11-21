<template>
	<div class="wrap">
		<!--头部-->
		<header class="headers">
			<i class="icon iconfont icon-shop"></i> 我的717商城
		</header>
		<!--主体-->
		<main class="main">
			<!--头像账户名-->
			<div class="Account">
				<div class="head_portrait"></div>
				<div class="account_name">71747474747</div>
			</div>
			<!--跳转我的店铺-->
			<div class="personal_stores">
				<i class="icon iconfont icon-shop"></i> 我的店铺
				<span class="personal_stores_go">></span>
			</div>
			<!--到货/发货信息-->
			<div class="order_form">
				<div>
					<i class="icon iconfont icon-shop"></i>
					<p>待付款</p>
				</div>
				<div>
					<i class="icon iconfont icon-shop"></i>
					<p>待发货</p>
				</div>
				<div>
					<i class="icon iconfont icon-shop"></i>
					<p>待收货</p>
				</div>
				<div class='order_form_border'>
					<i class="icon iconfont icon-shop"></i>
					<p>找售后</p>
				</div>
				<div>
					<i class="icon iconfont icon-shop"></i>
					<p>我的订单</p>
				</div>

			</div>
			<!--用户个人信息-->
			<div class="my_information">

				<div class="communitys">
					<i class="icon iconfont icon-shop"></i> 我的社区
					<span class="community_go">></span>
				</div>

				<div class="balance">
					<i class="icon iconfont icon-shop"></i> 账户余额
					<span class="balance_go">></span>
				</div>

				<div class="location" @click="add">
					<i class="icon iconfont icon-shop"></i> 地址管理
					<span class="location_go">></span>
				</div>
			</div>
			<div class="hot">
				热门推荐
			</div>
			<!-- <div class="hometownCon"> -->
			<!-- <dl>
					<dt>
						<img src="../../assets/l3.png" alt="">
					</dt>
					<dd>
						<h5>西班牙黑毛猪 西班牙伊比利亚黑猪肉肉肋排 排骨</h5>
						<p>
							<span>￥156.00</span>
							<i class="icon iconfont icon-cart "></i>
						</p>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/l4.png" alt="">
					</dt>
					<dd>
						<h5>西班牙黑毛猪 西班牙伊比利亚黑猪肉肉肋排 排骨</h5>
						<p>
							<span>￥156.00</span>
							<i class="icon iconfont icon-cart "></i>
						</p>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/l5.png" alt="">
					</dt>
					<dd>
						<h5>西班牙黑毛猪 西班牙伊比利亚黑猪肉肉肋排 排骨</h5>
						<p>
							<span>￥156.00</span>
							<i class="icon iconfont icon-cart "></i>
						</p>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/l6.png" alt="">
					</dt>
					<dd>
						<h5>西班牙黑毛猪 西班牙伊比利亚黑猪肉肉肋排 排骨</h5>
						<p>
							<span>￥156.00</span>
							<i class="icon iconfont icon-cart "></i>
						</p>
					</dd>
				</dl> -->
			<div class="flavors ks-clear">
				<good-comp v-for="items in goods_list" :key="items.item_id" :id="items.item_id" :url="items.pic_path" :name="items.title"
				 :price="items.originalPrice"></good-comp>
				<!-- </div> -->
			</div>

		</main>

	</div>
</template>
<script>
	import axios from 'axios'
	import good from '../../components/good.vue';
	export default {
		data() {
			return {
				goods_list: []
			}
		},
		methods: {
			add: function () {
				this.$router.push({ name: 'site' })
			}
		},
		components: {
			'good-comp': good
		},
		created() {
			axios.post('/mall/index/getGoodsChannel', { channel_id: 1 }).then((res) => {

				//this.channel_id++;
				this.goods_list = [...res.data.listItem]
			})
		}
	}

</script>
<style scoped>
	.wrap {
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		background: #eee;
		font-size: .24rem;
		background: #EEEEEE;
		font-family: 微软雅黑;
	}

	.headers {
		width: 100%;
		height: .90rem;
		position: relative;
		background: red;
		text-align: center;
		line-height: .90rem;
		font-size: .35rem;
		background: #fff;
	}

	.headers i {
		position: absolute;
		left: 5%;
	}

	.main {
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}

	.Account {
		width: 100%;
		height: 1.6rem;
		background: url(../../assets/banner1.png);
		position: relative
	}

	.account_name,
	.head_portrait {
		position: absolute;
	}

	.head_portrait {
		width: 1.1rem;
		height: 1.1rem;
		background: #fff;
		border-radius: 50px;
		top: 8%;
		left: 42%;
	}

	.account_name {
		color: #fff;
		font-size: .27rem;
		font-weight: 800;
		top: 71.5%;
		left: 37%;
	}

	.personal_stores {
		width: 100%;
		height: 1.5rem;
		background: #fff;
		font-size: .33rem;
		color: #FC4545;
		text-indent: .30rem;
		line-height: 1.5rem;
		position: relative;
		border-bottom: 1px solid #ccc;
	}

	.personal_stores i {
		font-size: .5rem;
	}

	.personal_stores_go {
		position: absolute;
		right: 5%;
	}

	.order_form {
		width: 100%;
		height: 1.5rem;
		display: -webkit-flex;
		-webkit-justify-content: space-around;
		align-items: center;
		background: #fff;
	}

	.order_form div {
		width: 20%;
		height: 100%;
		position: relative;
	}

	.order_form div i {
		position: absolute;
		top: 15%;
		left: 35%;
		font-size: 27px;
	}

	.order_form div p {
		margin-top: 61%;
		margin-left: 15%;
	}

	.order_form_border {
		border-right: 1px solid #ccc;
	}

	.my_information {
		width: 100%;
		height: 3rem;
		margin-top: 10px;
		background: #fff;
		margin-top: 5px;
	}

	.my_information div {
		width: 100%;
		height: 33.3%;
		border-bottom: 1px solid #ccc;
		line-height: 1rem;
		text-indent: .15rem;
		position: relative;
	}

	.my_information div span {
		position: absolute;
		right: 5%;
		top: 5%;
	}

	.hot {
		width: 100%;
		height: .8rem;
		background: #fff;
		margin-top: 5px;
		text-align: center;
		line-height: .8rem;
		font-size: .38rem;
	}

	.flavors {
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;
	}

	.flavors dl {
		width: 48%;
		margin-left: 1%;
		background: #fff;
	}

	.flavors dl dt {
		width: 100%;
		height: 3rem;
	}

	.flavors dl dt img {
		width: 100%;
		height: 100%;
	}

	.flavors dl dd {
		height: 1.5rem;
	}

	.flavors dl dd h5 {
		font-weight: normal;
		width: 95%;
		padding-left: 2.5%;
		height: .65rem;
		display: box;
		display: -webkit-box;


		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.flavors dl dd p {
		position: relative;
	}

	.flavors dl dd {
		color: red;
		font-size: .3rem;
		padding-left: 2.5%;
		padding-bottom: .2rem;
	}

	.flavors dl dd p i {
		position: absolute;
		right: .1rem;
		top: 0;
	}
</style>
<template>
	<div id="home" class="wrapper">
		<div class="content">
			<div class="swiper-container1">
				<div class="swiper-wrapper">
					<div class="swiper-slide"><img src="../assets/images/banner1@2x.png"/></div>
					<div class="swiper-slide"><img src="../assets/images/banner2@2x.png"/></div>
					<div class="swiper-slide"><img src="../assets/images/banner3@2x.png"/></div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>
			</div>
			<div class="swiper-container2">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item, index) of 3"><i class="iconfont icon-laba color2"></i>张春个接到200元订单</div>
				</div>
			</div>
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script type="text/javascript">
	import tabBar from "../components/tabBar.vue";
	import "../plugins/swiper/swiper.min.js";
	import "../plugins/swiper/swiper.min.css";
	export default {
		data() {
			return {

			}
		},
		computed: {},
		components: {
			'tab-bar': tabBar

		},
		methods: {

		},
		created() {

		},
		mounted() {
			let mySwiper1 = new Swiper('.swiper-container1', {
				loop: true,
				autoplay : 2000,
				// 如果需要分页器
				pagination: '.swiper-pagination',
			});
			let mySwiper2 = new Swiper('.swiper-container2', {
				loop: true,
				direction : 'vertical',
				autoplay : 2000,
				speed:800,
			})
		}
	}
</script>
<style lang="scss">
	#home {
		width: 100%;
		height: 100%;
		.content {
			top: 0;
			bottom: 49px;
		}
		.swiper-container1{
			position: relative;
			width:100%;
			padding: 0;
			img{
				vertical-align: bottom
			}
		}
		.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
			text-align: right;
		}
		.swiper-container2{
			width:100%;
			height: 40px;
			overflow: hidden;
			line-height: 40px;
			font-size: 14px;
			.iconfont{
				font-size: 18px;
				margin: 0 10px;
			}
		}
	}
</style>
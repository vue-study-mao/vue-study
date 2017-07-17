<template>
	<div class="tab-bar flex">
		<router-link class="tabbar-item flex-s flex-zhong" to="home" :class="{color1 : barState == 'home'}">
			<i class="iconfont icon-iconfonthome"></i>
			<span>首页</span>
		</router-link>
		<router-link class="tabbar-item flex-s flex-zhong" to="order" :class="{color1 : barState == 'order'}">
			<i class="iconfont icon-iconfontform"></i>
			<span>订单</span>
		</router-link>
		<router-link class="tabbar-item flex-s flex-zhong" to="user" :class="{color1 : barState == 'user'}">
			<i class="iconfont icon-iconfontmyfill"></i>
			<span>个人中心</span>
		</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				barState: ""
			}
		},
		created(){
			let barList = ["home","order","user"];
			let fullurl = this.$route.fullPath;
			console.log(fullurl );
			for(let i = 0; i < barList.length; i++){
				if(fullurl.indexOf(barList[i])>0){
					this.barState = barList[i];
					return;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab-bar{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 49px;
		border-top: 1px solid #d5d5d5;
		.tabbar-item{
			width: 33.3%;
			height: 100%;
			color: #666666;
		}
		.iconfont{
			font-size: 24px;
		}
		span{
			font-size: 12px;
		}
		.color1{
			color: #51a6ff;
		}
	}
</style>
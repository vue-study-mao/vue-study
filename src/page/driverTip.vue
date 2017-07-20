<template>
	<div id="tip">
		<header-v :title="title"></header-v>
		<div class="t_main">
			<div class="t_title">友情提示:后面填写的资料信息必须是有效真实,否则发现存在虚假信息,则无法享受到平台的政策</div>
			<button-v :txt = "txt" class="t_conform" @click.native="go()"></button-v>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	#tip{
		width: 100%;
		position: absolute;
		background-color: #E5E5E5;
		top: 0;
		left: 0;
		bottom:0;
		.t_main{
			width:100%;
			position: absolute;
			top:2.2rem;
			left:0;
			bottom:0;
			margin-top:0.25rem;
			padding:0 0.75rem;
			padding-top:1.25rem;
			background-color: #FFFFFF;
			.t_title{
				color:#333333;
				font-size:0.75rem;
				line-height:1.2rem;
			}
			.t_conform{
				margin-top:3.1rem;
			}
		}
	}
</style>
<script type="text/javascript">
    import header from "../component/header.vue";
    import btn from "../component/button.vue";
	export default{
		name:'drivertip',
		data() {
			return {
				title:"司机注册提醒",
				txt:"确定"
			}
		},
		computed: {

		},
		components: {
			"header-v": header,
			"button-v":btn
		},
		methods: {
			go(){
				this.$router.push({ path : '/kaka/driverinfo'})
			}
		},
		created() {},
		mounted() {
			
		}
	}
</script>
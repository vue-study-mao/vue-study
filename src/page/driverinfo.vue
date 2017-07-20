<template>
	<div id="info">
		<header-v :title="title"></header-v>
		<div class="i_main">
			<div class="i_field">
					<ul>
						<li class="flex flex-vc flex-hlr">
							<div class="i_name">姓名</div>
							<div class="i_input">
								<input type="text" placeholder="请输入真实的姓名" name="name" id="name" />
							</div>
						</li>
						<li class="flex flex-vc flex-hlr">
							<div class="i_name">身份证号</div>
							<div class="i_input">
								<input type="text" placeholder="请输入身份证号" name="name" id="idcard" />
							</div>
						</li>
						<li-v :title="name2"></li-v>
						<li-v :title="name1"></li-v>
						<li-v :title="name3"></li-v>
						<li-v :title="name4"></li-v>
					</ul>
			</div>
			<button-v :txt="txt" class="i_conform"></button-v>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	#info {
		width: 100%;
		position: absolute;
		background-color: #E5E5E5;
		top: 0;
		left: 0;
		bottom: 0;
		.i_main {
			position: absolute;
			width: 100%;
			top: 2.2rem;
			left: 0;
			bottom: 0;
			padding: 0 0.75rem;
			background-color: #FFFFFF;
			margin-top: 0.25rem;
			.i_conform{
				margin-top:1.5rem;
			}
			input {
			text-align: right;
		}
		}
	}
</style>
<script type="text/javascript">
	import Vue from 'vue';
	import header from "../component/header.vue";
	import btn from "../component/button.vue";
	import li from "../component/iinput.vue";
	export default {
		name: 'driverinfo',
		data() {
			return {
				title: "司机资料填写",
				txt: "确定",
				name1:"驾驶证上传",
				name2:"行驶证上传",
				name3:"营运证上传",
				name4:"身份证正反面上传",
				username: '',
				idcard: ''

			}
		},
		computed: {

		},
		components: {
			"header-v": header,
			"button-v": btn,
			"li-v":li
		},
		methods: {

		},
		created() {},
		mounted() {

		}
	}
</script>
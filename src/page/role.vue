<template>
	<div id="role">
		<header-v :title="title"></header-v>
		<div class="roles">
			<div class="r_title">选择身份，进入卡卡运</div>
			<div class="r_list">
				<ul>
					<label for="driver">
					<li class="flex flex-vc">
						<div class="r_img r_img1"></div>
						<div class="r_radio">
							<input  type="radio" name="driver" id="driver" value="1" v-model="pick"/>
							<div class="r_check" v-if="pick == 1"></div>
							<div class="r_nocheck" v-else></div>
							<span>司机</span>
						</div>
					</li>
					</label>
					<label for="zhaunxian">
					<li class="flex flex-vc">
						<div class="r_img r_img2"></div>
						<div class="r_radio">
							<input type="radio"  name="zhaunxian" id="zhaunxian" value="2" v-model="pick"/>
							<div class="r_check" v-if="pick == 2"></div>
							<div class="r_nocheck" v-else></div>
							<span>专线</span>
						</div>
					</li>
					</label>
					<label for="xinxibu">
					<li class="flex flex-vc">
						<div class="r_img r_img3"></div>
						<div class="r_radio">
							<input type="radio"  name="xinxibu" id="xinxibu" value="3" v-model="pick"/>
							<div class="r_check" v-if="pick == 3"></div>
							<div class="r_nocheck" v-else></div>
							<span>信息部</span>
						</div>
					</li>
					</label>
					<label for="wuliu">
					<li class="flex flex-vc">
						<div class="r_img r_img4"></div>
						<div class="r_radio">
							<input  type="radio" name="wuliu" id="wuliu" value="4" v-model="pick"/>
							<div class="r_check" v-if="pick == 4"></div>
							<div class="r_nocheck" v-else></div>
							<span>物流</span>
						</div>
					</li>
					</label>
					<label for="changjia">
					<li class="flex flex-vc">
						<div class="r_img r_img5"></div>
						<div class="r_radio">
							<input  type="radio" name="changjia" id="changjia" value="5" v-model="pick"/>
							<div class="r_check" v-if="pick == 5"></div>
							<div class="r_nocheck" v-else></div>
							<span>厂家</span>
						</div>
					</li>
					</label>
				</ul>
			</div>
		</div>
		<button class="r_conform" @click="go">确定</button>
	</div>
</template>
<style lang='scss' scoped="scoped">
	.roles {
		width: 100%;
		position: absolute;
		top: 2.2rem;
		left: 0;
		bottom: 2.2rem;
		.r_title {
			text-align: center;
			margin-top: 1.5rem;
			font-size: 0.75rem;
			color: #333333;
		}
		.r_list {
			margin: 0 1.85rem;
			margin-top: 1.125rem;
			li {
				width: 100%;
				height: 4rem;
				margin-bottom: 0.5rem;
				background: url(../assets/images/bg_line.png) repeat left top;
				border: 1px #333333 dotted;
				border-radius: 5px;
				.r_img {
					width: 3.2rem;
					height: 3.2rem;
					margin-left: 2.125rem;
					margin-right: 1.75rem;
				}
				.r_img1{
					background: url(../assets/images/icon_siji@2x.png) no-repeat center;
					background-size: 100% 100%;
				}
				.r_img2{
					background: url(../assets/images/icon_zhuanxian@2x.png) no-repeat center;
					background-size: 100% 100%;
				}
				.r_img3{
					background: url(../assets/images/icon_xinxibu@2x.png) no-repeat center;
					background-size: 100% 100%;
				}
				.r_img4{
					background: url(../assets/images/icon_wuliu@2x.png) no-repeat center;
					background-size: 100% 100%;
				}
				.r_img5{
					background: url(../assets/images/icon_changjia@2x.png) no-repeat center;
					background-size: 100% 100%;
				}
				.r_radio{
					position:relative;
					#driver,#zhaunxian,#xinxibu,#wuliu,#changjia{
						display: none;
					}
					.r_check{
						display: inline-block;
						width:0.8rem;
						height:0.8rem;
						background: url(../assets/images/icon_choice@2x.png) no-repeat center;
						background-size: 100% 100%;
					}
					.r_nocheck{
						display: inline-block;
						width:0.8rem;
						height:0.8rem;
						background: url(../assets/images/icon_nochoice@2x.png) no-repeat center;
						background-size: 100% 100%;
					}
				}
			}
		}
	}
	.r_conform{
			display: block;
			position:absolute;
			bottom:0;
			left:0;
			width:100%;
			height:2.5rem;
			background-color: #51a6ff;
			line-height: 2.5rem;
			text-align: center;
			color:#FFFFFF;
			font-size:.85rem;
		}
</style>
<script type="text/javascript">
	import header from "../component/header.vue"
	export default {
		name: "role",
		data() {
			return {
				title: '选择角色',
				pick: '',
			}
		},
		computed: {

		},
		components: {
			"header-v": header
		},
		methods: {
			go(){
				this.$router.push({path: '/kaka/drivertip'})
			}
		},
		created() {},
		mounted() {
			
		}
	}
</script>
<template>
	<div id="register">
		<header class="bar bar-nav">
			<router-link to='/' class="button button-link button-nav pull-left back">
				<span class="iconfont icon-fanhui"></span>
			</router-link>
			<h1 class="title">快速注册</h1>
		</header>
		<div class="r_form content">
			<ul>
				<li class="bar-line">
					<div class="item-content">
						<div class="item-media"><i class="icon-form-user"></i></div>
						<div class="item-inner">
							<div class="item-input">
								<input type="text" placeholder="请输入登录用户名">
							</div>
						</div>
					</div>
				</li>
				<li class="bar-line">
					<div class="item-content">
						<div class="item-media"><i class="icon-form-ck"></i></div>
						<div class="item-inner">
							<div class="item-input check">
								<input type="text" placeholder="请输入手机验证码">
							</div>
							<div class="item-checknum">
								<a href="javascript:;">获取验证码</a>
							</div>
						</div>
					</div>
				</li>
				<li class="bar-line">
					<div class="item-content">
						<div class="item-media"><i class="icon-form-psw"></i></div>
						<div class="item-inner">
							<div class="item-input">
								<input type="text" placeholder="请设置登录密码">
							</div>
						</div>
					</div>
				</li>
				<li class="bar-line">
					<div class="item-content">
						<div class="item-media"><i class="icon-form-person"></i></div>
						<div class="item-inner">
							<div class="item-input">
								<input type="text" placeholder="请输入推荐人手机号码(选填)">
							</div>
						</div>
					</div>
				</li>
			</ul>
			<div class="r_submit">
				<button>注册</button>
			</div>
			<div class="r_argument flex flex-vc">
				<input type="checkbox" name="check" id="check" value="" />
				<div class="r_checkbox"></div>
				<div class="r_tip">我已阅读并同意<i>《洪川用户协议》</i></div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: "register",
		data() {
			return {
				
			}
		},
		computed: {

		},
		components: {

		},
		methods: {

		},
		created() {
			
		},
		mounted() {

		}
	}
</script>
<style lang="scss">
	#register {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #eeeeee;
		.r_form {
			width: 100%;
			position: absolute;
			top: 2.2rem;
			margin-top: 0.5rem;
			ul {
				padding: 0 0.5rem;
				.item-input {
					position: relative;
				}
				.check:after {
					display: block;
					content: '';
					width: 1px;
					height: 100%;
					position: absolute;
					right: 0.5rem;
					top: 0;
					background-color: #eaeaea;
				}
				.item-checknum {
					width: 33%;
					font-size: 0.7rem;
					a {
						display: block;
					}
				}
			}
			.r_submit {
				margin: 0 1rem;
				margin-top: 2rem;
				button {
					display: block;
					width: 100%;
					height: 2.2rem;
					background-color: #51a6ff;
					text-align: center;
					line-height: 2.2rem;
					border-radius: 5px;
					color: #FFFFFF;
					font-size: 0.9rem;
				}
			}
			.r_argument{
				margin: 0 1rem;
				margin-top: 0.6rem;
				position: relative;
				#check{
					display: block;
					width:0.6rem;
					height:0.6rem;
				}
				.r_checkbox{
					width:0.6rem;
					height:0.6rem;
					position:absolute;
					top:0;
					left:0;
					background: url(../assets/images/ico_chioce@2x.png) no-repeat center;
					background-size: 100% 100%;
				}
				.r_tip{
					font-size:0.6rem;
					i{
						color:#51a6ff;
					}
					margin-left:0.3rem;
				}
			}
		}
	}
</style>
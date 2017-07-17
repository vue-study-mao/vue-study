<template>
	<div id="first" class="wrapper">
		<div class="logo flex flex-zhong">
			<div class="logoimg">
				<img src="../assets/images/icon_logo@2x.png" />
			</div>
		</div>
		<div class="form">
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
						<div class="item-media"><i class="icon-form-psw"></i></div>
						<div class="item-inner">
							<div class="item-input">
								<input type="text" placeholder="请输入登录密码">
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="submit">
			<button>登录</button>
		</div>
		<div class="text">
			<router-link to='/' class="forgetPsw">忘记密码</router-link>
			|
			<router-link to='/kaka/register' class="register">快速注册</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "login",
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
	.logo {
		width: 100%;
		height: 12.55rem;
		.logoimg {
			width: 4rem;
			height: 4rem;
		}
	}
	
	.form {
		margin: 0 1rem;
		.icon_tel {
			width: 1.2rem;
			height: 1.2rem;
		}
	}
	
	.submit {
		margin: 0 1rem;
		margin-top:2.5rem;
		button {
			display: block;
			width: 100%;
			height: 2.2rem;
			background-color: #51a6ff;
			text-align: center;
			line-height: 2.2rem;
			border-radius: 5px;
			color:#FFFFFF;
			font-size:0.9rem;
		}
	}
	.text{
		margin-top:1.1rem;
		text-align: center;
		font-size:0.7rem;
		color:#b6b6b6;
		.forgetPsw{
			color:#b6b6b6;
		}
		.register{
			color:#b6b6b6;
		}
	}
</style>
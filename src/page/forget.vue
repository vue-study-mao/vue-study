<template>
	<div id="register">
		<header-v :title="title"></header-v>
		<div class="r_form content">
			<ul>
				<li class="bar-line">
					<div class="item-content">
						<div class="item-media"><i class="icon-form-user"></i></div>
						<div class="item-inner">
							<div class="item-input">
								<input type="text" placeholder="请输入登录用户名" v-model="username">
							</div>
						</div>
					</div>
				</li>
				<li class="bar-line">
					<div class="item-content">
						<div class="item-media"><i class="icon-form-ck"></i></div>
						<div class="item-inner">
							<div class="item-input check">
								<input type="text" placeholder="请输入手机验证码" v-model="checknum">
							</div>
							<div class="item-checknum">
								<router-link to="/kaka/forget" class="f_check" v-bind:class="{f_time: ischeck }" @click.native="getChecknum()">{{countime}}</router-link>
							</div>
						</div>
					</div>
				</li>
				<li class="bar-line">
					<div class="item-content">
						<div class="item-media"><i class="icon-form-psw"></i></div>
						<div class="item-inner">
							<div class="item-input">
								<input type="password" placeholder="请输入新密码" v-model="newpsw">
							</div>
						</div>
					</div>
				</li>
				<li class="bar-line">
					<div class="item-content">
						<div class="item-media"><i class="icon-form-psw"></i></div>
						<div class="item-inner">
							<div class="item-input">
								<input type="password" placeholder="请确认新密码" v-model="conformpsw">
							</div>
						</div>
					</div>
				</li>
			</ul>
			<div class="r_submit">
				<button @click="setPsw()">确定</button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {
		Toast
	} from 'mint-ui';
	import md5 from 'js-md5';
	import header from "../component/header.vue"
	export default {
		name: "forget",
		data() {
			return {
				ischeck: false,
				ismobile: false,
				equal: false,
				second: 60,
				title:'忘记密码',
				countime: '获取验证码',
				newpsw: '',
				conformpsw: '',
				username: '',
				checknum: ''
			}
		},
		computed: {

		},
		components: {
			"header-v":header
		},
		methods: {
			setPsw() {
				let mobileReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
				this.ismobile = mobileReg.test(this.username);
				this.newpsw == this.conformpsw ? this.equal = true : this.equal = false;
				let param = {
					"mobile": this.username,
					"password": md5(this.newpsw),
					"smsCode": this.checknum
				};
				if(this.ismobile && this.equal && this.newpsw != '' && this.conformpsw != '' && this.username != '' && this.checknum != '') {
					this.api.post(this.GLOBAL.baseJs.host() + 'userForgotPsw', param, (res) => {
						let msg = res.data.msg;
						msg =="成功"? this.$router.push({ path: '/kaka/home'}):Toast(msg);
					});
				} else if(!this.equal) {
					Toast('两次输入密码不一致！');
				} else if(this.newpsw != '' && this.conformpsw != '' && this.username != '' && this.checknum.lenth != 6) {
					Toast('验证码不正确！');
				} else {
					Toast('请输入内容哦！');
				}
			},
			getChecknum() {
				let mobileReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
				this.ismobile = mobileReg.test(this.username);
				if(this.ismobile && !this.ischeck){
					let param = {
						"mobile":this.username,
						"smsType":2
					};
					this.api.post(this.GLOBAL.baseJs.host() + 'sendSms', param, (res) => {
						let msg = res.data.msg;
						Toast(msg)
					});
				};
				this.ismobile ? this.countdown() : Toast('请输入正确的手机号码！');
			},
			countdown() {
				this.ischeck = true;
				let str = this.second + "S";
				this.countime = str;
				let timer = setTimeout(() => {
					if(this.second == 0) {
						this.countime = "获取验证码";
						this.ischeck = false;
						this.second = 60;
						clearTimeout(timer);
					} else {
						this.second--;
						this.countdown();
					};
				}, 1000)
			}
		},
		created() {

		},
		mounted() {
			
		}
	}
</script>
<style lang="scss" scoped>
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
			margin-top: 0.25rem;
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
					.f_check {
						text-align: center;
					}
					.f_time{
						color:#D5D5D5;
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
			.r_argument {
				margin: 0 1rem;
				margin-top: 0.6rem;
				position: relative;
				#check {
					display: block;
					width: 0.6rem;
					height: 0.6rem;
					display: none;
				}
				.r_checkbox {
					width: 0.7rem;
					height: 0.7rem;
					background: url(../assets/images/ico_chioce@2x.png) no-repeat center;
					background-size: 100% 100%;
				}
				.r_nocheckbox {
					width: 0.7rem;
					height: 0.7rem;
					background-color: #eee;
				}
				.r_tip {
					font-size: 0.6rem;
					i {
						color: #51a6ff;
					}
					margin-left:0.3rem;
				}
			}
		}
	}
</style>
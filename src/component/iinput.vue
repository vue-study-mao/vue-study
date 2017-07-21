<template>
	<li class="flex flex-vc flex-hlr">
		<div class="i_name">{{text}}</div>
		<form id="form6" enctype="multipart/form-data">
		<label for="upfile">
			<div class="i_add"></div>
			<input type="file" id="upfile" name="fileToUpload" class="fileToUpload" @change="imgLoad()"  accept="image/jpg,image/jpeg,image/png" />
		</label>
		</form>
	</li>
</template>
<style lang="scss" scoped>
	li {
		height: 2.2rem;
		position: relative;
		.i_name {
			font-size: 0.85rem;
			color: #333;
		}
		.fileToUpload{
			display: none;
		}
		.i_add {
			width: 1.2rem;
			height: 1.2rem;
			background: url(../assets/images/icon_add@2x.png) no-repeat center;
			background-size: 100% 100%;
		}
	}
	
	li:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		height: 1px;
		width: 100%;
		background-color: #e5e5e5;
		display: block;
	}
	
	@media only screen and (-webkit-min-device-pixel-ratio: 2) {
		li:after {
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
		}
	}
	
	@media only screen and (-webkit-min-device-pixel-ratio: 3) {
		li:after {
			-webkit-transform: scaleY(0.33);
			transform: scaleY(0.33);
		}
	}
</style>
<script type="text/javascript">
	export default {
		name: 'lis',
		data() {
			return {
				text: this.title
			}
		},
		props: [
			'title'
		],
		components: {

		},
		methods: {
			imgLoad() {
				let reader = new FileReader();
				let input = document.getElementById("upfile");
				let files = input.files;
				console.log(reader)
				if(!/image\/\w+/.test(files[0].type)) {
					console.log(files[0].name + "不是图像文件!");
				} else {
					reader.readAsDataURL(files[0]);
					reader.onload = ()=> {
						var formElement = document.querySelector("form");
						let param = new FormData(formElement);
						param.append('file', files[0]);
						param.append('userId',180);
						console.log(param);
						//此处可加入文件上传的代码
						this.api.post(this.GLOBAL.baseJs.host() +'/att/attUpload', param, (data)=> {
							console.log(data.data);
							let res = data.data;
							if(res.successed) {
								console(res.returnValue[0])
							}
						}, (progressEvent)=> {
							console.log(progressEvent);
						});
					};
				};
			}
		},
		created() {},
		mounted() {

		}
	}
</script>
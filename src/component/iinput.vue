<template>
	<li class="flex flex-vc flex-hlr">
		<div class="i_name">{{text}}</div>
		<label class="toUp" for="upfile">
			<div class="i_add"></div>
			<input type="file" id="upfile" name="fileToUpload" class="fileToUpload"  accept="image/jpg,image/jpeg,image/png" />
		</label>
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

		},
		created() {},
		mounted() {

		}
	}
</script>
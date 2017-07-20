<template>
	<button class="k_conform">{{text}}</button>
</template>
<style lang="scss" scoped>
	.k_conform {
		width: 100%;
		height: 2.2rem;
		background-color: #51a6ff;
		line-height: 2.2rem;
		text-align: center;
		color: #FFFFFF;
		font-size: 0.9rem;
		border-radius: 5px;
	}
</style>
<script type="text/javascript">
	export default {
		name: 'button',
		data() {
			return {
				text : this.txt
			}
		},
		props: [
			'txt'
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
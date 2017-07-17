<template>
	<div id="order">
		<div class="content">
			order
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script type="text/javascript">
	import tabBar from "../components/tabBar.vue";
	export default {
		data() {
			return {

			}
		},
		computed: {
		},
		components: {
			'tab-bar' : tabBar

		},
		methods: {

		},
		created() {

		},
		mounted() {

		}
	}
</script>
<style lang="scss" scoped>
	#order{
		width: 100%;
		height: 100%;
		.content{
			top: 0;
			bottom: 49px;
			background: #ccc;
		}
	}
	
</style>
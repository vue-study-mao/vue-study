<template>
	<router-view></router-view>
</template>
<script type="text/javascript">
	export default {
		name: "app",
		data(){
			return {
				
			}
		},
		methods: {
			getRem(){
				this.GLOBAL.baseJs._setRem();
			}
		},
		created(){
			this.getRem();
		}
	}
</script>

<style lang="scss">

</style>
<template>
	<div id="role">
		<header-v :title="title"></header-v>
	</div>
</template>
<style lang='scss'></style>
<script type="text/javascript">
    import header from "../component/header.vue"
	export default {
		name: "role",
		data() {
			return {
				title:'选择角色'
			}
		},
		computed: {

		},
		components: {
			"header-v":header
		},
		methods: {
		},
		created() {

		},
		mounted() {
			
		}
	}
</script>
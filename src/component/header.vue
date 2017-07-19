<template>
	<header class="bar bar-nav">
		<div class="button button-link button-nav pull-left back">
			<span class="iconfont icon-fanhui" @click="goback()"></span>
		</div>
		<h1 class="title">{{h_title}}</h1>
	</header>
</template>
<style lang="scss">

</style>
<script type="text/javascript">
	export default{
		name:"header",
        data(){
            return{
            	h_title : this.title
            }
        },
        props: [
			'title'
		],
        methods:{
        	goback(){
        		this.$router.go(-1);
        	}
        },
        created(){

        },
        mounted(){

        }
    }
</script>
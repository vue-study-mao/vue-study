import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import store from '../store/';//引入vuex
import App from '../App.vue'
import home from '../page/home.vue'//首页
import register from '../page/register.vue';


const routes = [{
    path: '/',
    component: App,
	children: [
		{
            path: '',
            redirect: '/kaka/home'
        },{
			path: '/kaka/home',//首页
			component: home
		},{
			path: '/kaka/register',//快速注册
			component: register
		}
	]
}];

const router = new VueRouter({
    routes: routes
});

export default router;

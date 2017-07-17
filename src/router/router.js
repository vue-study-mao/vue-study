import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import store from '../store/';//引入vuex
import App from '../App.vue'
import home from '../page/home.vue'//首页
import order from '../page/order.vue'//订单
import user from '../page/user.vue'//个人中心


const routes = [{
    path: '/',
    component: App,
	children: [
		{
            path: '',
            redirect: '/home'
        },{
			path: '/home',//首页
			component: home
		},{
			path: '/order',//订单
			component: order
		},{
			path: '/user',//个人中心
			component: user
		}
	]
}];

const router = new VueRouter({
    routes: routes
});

export default router;

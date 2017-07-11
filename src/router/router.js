import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import store from '../store/';//引入vuex
import App from '../App.vue'
import home from '../page/home.vue'//首页


const routes = [{
    path: '/',
    component: App,
	children: [
		{
            path: '',
            redirect: '/tab/home'
        },{
			path: '/tab/home',//首页
			component: home
		}
	]
}];

const router = new VueRouter({
    routes: routes
});

export default router;

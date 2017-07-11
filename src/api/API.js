import Vue from 'vue';
import axios from 'axios';
import config from './config';
import qs from 'qs';
import { Util } from '../assets/js/util.js'; //引入Util
import { Indicator } from 'mint-ui'; //引入mintUI  indicator组件
class API {
	getN(url, param) {
		/*防止缓存*/
		var randomNum1 = parseInt(Math.random() * 10);
		var randomNum2 = parseInt(Math.random() * 1000) + '' + new Date().getTime();
		param['noCache' + randomNum1] = randomNum2;
		config.url = url;
		config.data = {};
		config.params = {};
		config.params = param;
		return axios.get(url, config); //使用get方式
		//return axios(config);//使用post方式
	};
	ajax(url, param, callback) {
		let that = this;
		this.getN(url, param).then(callback).catch(function(error) {
			that.errorHandle(error);
		});
	};
	ajax1(url, param, callback, then) {
		let that = this;
		this.getN(url, param).then(callback).then(then).catch(function(error) {
			that.errorHandle(error);
		});
	};

	ajaxPost(url, param, callback) {
		let that = this;
		this.postN(url, param).then(callback).catch(function(error) {
			that.errorHandle(error);
		});
	};

	//post请求
	postN(url, param) {
		/*防止缓存*/
		var randomNum1 = parseInt(Math.random() * 10);
		var randomNum2 = parseInt(Math.random() * 1000) + '' + new Date().getTime();
		param['noCache' + randomNum1] = randomNum2;
		config.url = url;
		config.params = {};
		config.data = {};
		config.data = param;
		return axios(config); //使用post方式
	};
	//上传图片
	postUp(url, param, callback, progress) {
		let allUrl = config.baseURL + url;
		let upconfig = {
			onUploadProgress: progress

		}
		return axios.post(allUrl, param, upconfig).then(callback); //使用post方式
	};

	//请求错误处理
	errorHandle(error) {
		Indicator.close();
		if(error.response || error.message.indexOf("timeout") > -1) {
			//状态不在200和超时的处理
			Indicator.close();
			Util.myAlert("服务器未响应")
		}
	};

	
}
export default API;
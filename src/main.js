// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import ElementUI from 'element-ui';
//引入element-ui的默认CSS样式
import 'element-ui/lib/theme-default/index.css';

import LazyRender from 'vue-lazy-render'
Vue.use(LazyRender);

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  beforeCreate:function(){
    console.log('beforeCreated.....');
  }
})

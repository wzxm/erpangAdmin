import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

// 使用 vuex
Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
    // TODO
    count: 0,
    notes: [],
    activeNote: {}
}

//  创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    // TODO
    increment (state, amount) {
        state.count = state.count + amount;
    },
    minus (state, amount) {
        if(state.count <= 0) return;
        state.count = state.count - amount;
    }
}

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    actions,
    getters,
    state,
    mutations
});
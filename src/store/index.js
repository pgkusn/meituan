import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        goods: null,
    },
    mutations: {
        setGoods(state, payload) {
            state.goods = payload;
        },
    },
    actions: {
        getGoods({ commit }) {
            axios.get('data/goods.json')
            .then(res => {
                if (res.data.code === 0) {
                    commit('setGoods', res.data.data);
                }
            })
            .catch(err => console.error(err));
        }
    },
    modules: {
    }
})

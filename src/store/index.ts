import Vue from 'vue';
import Vuex from 'vuex';
import {createVuexStore} from 'vuex-simple';
import {Store} from './store';

Vue.use(Vuex);

const store = new Store();

export default createVuexStore(store, {
  strict: process.env.NODE_ENV !== 'production',
})

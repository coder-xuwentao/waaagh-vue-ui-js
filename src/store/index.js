import { createStore } from 'vuex';

const test1 = false
  ? true
  : false
    ? false
    : true
      ? true
      : false
        ? false
        : true
          ? true
          : false
            ? false
            : true; // prettier-ignore

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

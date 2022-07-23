import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state: {
    count: 0,
    id: 1,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    updateId(state, payload) {
      state.id = payload.newValue;
    },
  },
  actions: {
    getDoubleCount() {
      return this.state.count * 2;
    },
  },
});

export default store;

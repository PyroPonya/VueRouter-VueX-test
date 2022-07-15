<template>
  <div class="container">
    <h1 class="title">This is a component THREE</h1>
    <nav class="navigation">
      <router-link to="/one">One</router-link>
      <router-link to="/two">Two</router-link>
      <router-link to="/three">Three</router-link>
    </nav>
    <span>stored count: {{ count }}</span>
    <div class="control">
      <button @click="plusOne">+1</button>
      <button @click="minusOne">-1</button>
    </div>
  </div>
</template>
<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const plusOne = () => store.commit('increment');
    const minusOne = () => store.commit('decrement');
    return {
      count,
      plusOne,
      minusOne,
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: black;
  color: greenyellow;
  padding: 1.5rem;
  border-radius: 1rem;
}
.control {
  display: flex;
  gap: 0.5rem;
}
.navigation {
  display: flex;
  gap: 0.5rem;
}
</style>

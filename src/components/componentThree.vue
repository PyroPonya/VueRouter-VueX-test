<template>
  <div class="container">
    <h1 class="title">This is a component THREE</h1>
    <nav class="navigation">
      <router-link :to="{ name: 'componentOne' }">One</router-link>
      <router-link :to="{ name: 'componentTwo', params: { id: storedId } }"
        >Two</router-link
      >
      <router-link :to="{ name: 'componentThree', params: { id: storedId } }"
        >Three</router-link
      >
    </nav>
    <span>current page id: {{ currentId }}</span>
    <span>stored page id: {{ storedId }}</span>
    <input v-model="newId" type="text" placeholder="enter dynamic id + hit link^" />
    <button @click="setId">store new id {{ newId ? 'as: ' + newId : '' }}</button>
    <span>stored count: {{ count }}</span>
    <div class="control">
      <button @click="plusOne">+1</button>
      <button @click="minusOne">-1</button>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  props: {
    id: [Number, String],
  },
  setup(props) {
    const store = useStore();
    const newId = ref('');
    const currentId = computed(() => props.id);
    const count = computed(() => store.state.count);
    const storedId = computed(() => store.state.id);
    const plusOne = () => store.commit('increment');
    const minusOne = () => store.commit('decrement');
    const setId = () => {
      store.commit('updateId', { newValue: newId.value });
    };
    return {
      count,
      currentId,
      storedId,
      props,
      newId,
      plusOne,
      minusOne,
      setId,
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

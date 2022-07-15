<script setup></script>

<template>
  <div class="vueContainer">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0 auto;
  margin: 0 auto;
}

.vueContainer {
  display: flex;
  flex-flow: column wrap;
}
</style>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link v-for="value in entities" :key="value.name" :to="'/entity/' + value.name">
      {{ value.title }}
    </router-link>
  </nav>
</template>
<script>
export default {
  props: {
    entities: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style lang="scss">
nav {
  padding: 10px 50px;
  margin: 10px 10px;
  display: flex;
  border-radius: 18px;
  justify-content: space-between;
  background: rgb(215, 215, 215);
  border: 2px solid #b0b0b0;
  a {
    color: #000;
    text-decoration: none;
    font-size: 24px;
    transition-property: all;
    transition-duration: 300ms;
    &:hover {
      color: #5c5c5c
    }
  }
}
</style>

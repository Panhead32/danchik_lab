<template>
  <Navigation :entities="entities"/>
  <router-view id="app"/>
</template>
<script>
import Navigation from '@/components/navBar/NavigationComponent.vue';
import entities from '@/constants';

export default {
  components: {
    Navigation,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title;
      },
    },
  },
  data: () => ({ entities }),
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  height: 100%;
}
</style>

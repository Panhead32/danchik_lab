<template>
  <div >
    <VTable v-if="entityName" :entity-name="entityName"/>
    <div class="entity-view" v-else>
      Choose your entity
    </div>
  </div>
</template>
<script>
import VTable from '@/components/Table/VTable.vue';

export default {
  components: {
    VTable,
  },
  props: {
    entityName: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss">
.entity-view {
  margin-top: 256px;
  text-align: center;
  font-size: 60px;
  font-weight: 600;
}
</style>

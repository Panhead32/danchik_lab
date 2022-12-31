<template>
  <thead>
    <tr>
      <th v-for="name in entityFields" :key="name">{{ formatName(name) }}</th>
    </tr>
  </thead>
</template>
<script>
export default {
  props: {
    entityFields: {
      type: Array,
      default: () => ([]),
    },
  },
  methods: {
    formatName(name) {
      return name.slice(0, 1).toUpperCase() + name.slice(1);
    },
  },
};
</script>
<style lang="scss">
  thead {
    tr {
      border: 1px solid #dcdcdc;
    }
  }
</style>

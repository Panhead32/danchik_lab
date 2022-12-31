<template>
  <tbody>
    <tr>
      <th v-for="row in data" :key="row"> {{row}}</th>
    </tr>
  </tbody>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>
<style lang="scss">

</style>

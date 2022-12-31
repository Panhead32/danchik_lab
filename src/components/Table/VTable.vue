<template>
  <table>
    <TableHeader :entity-fields="getFields"/>
    <TableBody :data="entityData" :entity-schema="getEntitySchema"/>
    <TableFooter/>
  </table>
</template>
<script>
import TableHeader from '@/components/Table/TableHeader.vue';
import TableFooter from '@/components/Table/TableFooter.vue';
import TableBody from '@/components/Table/TableBody.vue';
import entity from '@/constants';
import getRows from '@/utils/entity.gateway';

export default {
  props: {
    entityName: {
      type: String,
      default: '',
    },
  },
  data: () => ({ entity, entityData: [] }),
  components: {
    TableHeader,
    TableFooter,
    TableBody,
  },
  async mounted() {
    this.entityData = await getRows(this.entityName);
  },
  computed: {
    getEntitySchema() {
      return this.entity[this.entityName];
    },
    getFields() {
      return this.getEntitySchema.fields;
    },
  },
};
</script>

<style lang="scss">
table {
  width: 100%;
}

</style>

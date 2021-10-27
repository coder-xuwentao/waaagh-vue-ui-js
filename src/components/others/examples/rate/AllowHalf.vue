<template>
  Allow Half:
  <WaRate v-model="value" allow-half></WaRate>
</template>

<script>
import { defineComponent, ref } from 'vue';
import WaRate from '@/components/form/WaRate';

export default defineComponent({
  components: { WaRate },
  setup() {
    return {
      value: ref(null),
    };
  },
});
</script>
<style scoped>
</style>

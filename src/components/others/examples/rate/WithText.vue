<template>
  With Text:
  <WaRate v-model="value" :texts="['oops', 'disappointed', 'normal', 'good', 'great']" show-text>
  </WaRate>
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

<template>
  ReadOnly
  <WaRate
    v-model="value"
    disabled
    show-score
    text-color="#ff9900"
    score-template="{value} points"
  >
  </WaRate>
</template>

<script >
import { defineComponent, ref } from 'vue';
import WaRate from '@/components/form/WaRate';

export default defineComponent({
  components: { WaRate },
  setup() {
    return {
      value: ref(3.7),
    };
  },
});
</script>

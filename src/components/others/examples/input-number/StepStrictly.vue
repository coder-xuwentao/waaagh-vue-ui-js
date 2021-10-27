<template>
  <WaInputNumber v-model="num" :step="2" step-strictly />
</template>

<script>
import WaInputNumber from '@/components/form/WaInputNumber';
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { WaInputNumber },
  setup() {
    const num = ref(2)
    return {
      num,
    }
  },
})
</script>

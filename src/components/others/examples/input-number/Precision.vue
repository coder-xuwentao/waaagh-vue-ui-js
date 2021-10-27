<template>
  <WaInputNumber v-model="num" :precision="2" :step="0.1" :max="10" />
</template>

<script>
import WaInputNumber from '@/components/form/WaInputNumber';
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { WaInputNumber },
  setup() {
    const num = ref(1)
    return {
      num,
    }
  },
})
</script>

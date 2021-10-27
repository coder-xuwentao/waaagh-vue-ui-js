<template>
  <WaInputNumber v-model="num" :step="2" />
</template>

<script>
import WaInputNumber from '@/components/form/WaInputNumber';
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { WaInputNumber },
  setup() {
    const num = ref(5)
    return {
      num,
    }
  },
})
</script>

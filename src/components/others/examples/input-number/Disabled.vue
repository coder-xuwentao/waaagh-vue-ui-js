<template>
  <WaInputNumber v-model="num" disabled />
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

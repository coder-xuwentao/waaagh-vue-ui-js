<template>
  <WaInputNumber v-model="num1" />
  <WaInputNumber v-model="num2" size="medium" />
  <WaInputNumber v-model="num3" size="small" />
  <WaInputNumber v-model="num4" size="mini" />
</template>

<script>
import WaInputNumber from '@/components/form/WaInputNumber';
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { WaInputNumber },
  setup() {
    const num1 = ref(1)
    const num2 = ref(2)
    const num3 = ref(3)
    const num4 = ref(4)
    return {
      num1,
      num2,
      num3,
      num4,
    }
  },
})
</script>

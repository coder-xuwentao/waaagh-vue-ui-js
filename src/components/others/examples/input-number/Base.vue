<template>
  <WaInputNumber v-model="num" :min="1" :max="10" @change="handleChange" />
</template>

<script>
import WaInputNumber from '@/components/form/WaInputNumber';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { WaInputNumber },
  setup() {
    const num = ref(1);
    const handleChange = (value) => {
      console.log(value);
    };
    return {
      num,
      handleChange,
    };
  },
});
</script>

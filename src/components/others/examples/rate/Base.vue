<template>
  <div class="base-demo-block">
    <span class="demonstration">Default</span>
    <WaRate v-model="value1"></WaRate>
  </div>
  <div class="base-demo-block">
    <span class="demonstration">Color for different levels</span>
    <WaRate v-model="value2" :colors="colors"> </WaRate>
  </div>
</template>

<script>
import WaRate from '@/components/form/WaRate';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { WaRate },
  setup() {
    return {
      value1: ref(null),
      value2: ref(null),
      colors: ref(['#99A9BF', '#F7BA2A', '#FF9900']), // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
});
</script>
<style scoped>
.base-demo-block {
  padding: 30px 0;
  text-align: center;
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
}
.base-demo-block + .base-demo-block {
  border-left: solid 1px #ccc;
}
</style>;


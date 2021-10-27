<template>
  <div class="wa-snippet-example">
    <div class="wa-snippet-title">default</div>
    <div class="wa-snippet-item">
      <WaSwitch v-model="switchBool_1" @change="handleChangeSwitch_1"></WaSwitch>
    </div>

    <div class="wa-snippet-title">beforeChange</div>
    <div class="wa-snippet-item">
      <WaSwitch v-model="switchBool_2" :beforeChange="beforeChange1"></WaSwitch>
      <span v-if="loading_2"> loading 1s...</span>
    </div>

    <div class="wa-snippet-title">loading</div>
    <div class="wa-snippet-item">
      <WaSwitch :value="false" loading></WaSwitch>
      <WaSwitch style="padding-left:1em" :value="true" loading></WaSwitch>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import WaSwitch from '@/components/form/WaSwitch';
export default defineComponent({
  components: { WaSwitch },
  setup(props) {
    const switchBool_1 = ref(true);

    const handleChangeSwitch_1 = (val) => {
      console.log(val);
    };

    const switchBool_2 = ref(false);
    const loading_2 = ref(false);

    const beforeChange1 = () => {
      loading_2.value = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          loading_2.value = false;
          return resolve(true);
        }, 1000);
      });
    };

    return {
      switchBool_1,
      handleChangeSwitch_1,

      switchBool_2,
      loading_2,
      beforeChange1,
    };
  },
});
</script>

<style lang="scss" scoped>
.wa-snippet-example {
  margin: 0 auto;
  max-width: 600px;
}
.wa-snippet-title {
  margin-top: 1rem;
  font-weight: bold;
}
.wa-snippet-item {
  padding: 1rem 0;
}
</style>

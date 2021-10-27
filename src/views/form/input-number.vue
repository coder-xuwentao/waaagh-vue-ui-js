<template>
  <div class="wa-snippet-example">
    <div class="rate-demo-block">
      <h3>Base</h3>
      <BaseDemo />
    </div>
    <div class="rate-demo-block">
      <h3>Disabled</h3>
      <Disabled />
    </div>
    <div class="rate-demo-block">
      <h3>Steps</h3>
      <Steps />
    </div>
    <div class="rate-demo-block">
      <h3>Step Strictly</h3>
      <StepStrictly />
    </div>
    <div class="rate-demo-block">
      <h3>Precision</h3>
      <Precision />
    </div>
    <div class="rate-demo-block">
      <h3>Size</h3>
      <Size />
    </div>
  </div>
</template>

<script>
import BaseDemo from '@examples/input-number/Base';
import Disabled from '@examples/input-number/Disabled';
import Steps from '@examples/input-number/Steps';
import StepStrictly from '@examples/input-number/StepStrictly';
import Precision from '@examples/input-number/Precision';
import Size from '@examples/input-number/Size';
export default {
  components: { BaseDemo, Disabled, Steps, StepStrictly, Precision, Size },
  data() {
    return {
      value: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.wa-snippet-example {
  margin: 0 auto;
  max-width: 600px;
}
.rate-demo-block {
  margin-bottom: 1.5rem;
  h3 {
    margin-bottom: 0.5em;
  }
}
</style>


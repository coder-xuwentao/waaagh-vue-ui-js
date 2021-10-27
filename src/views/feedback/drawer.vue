<template>
  <div class="wa-snippet-example">
    <div class="wa-snippet-title">Basic Usage</div>
    <div class="wa-snippet-item">
      <Examplebasic />
    </div>
    <div class="wa-snippet-title">Close Event</div>
    <div class="wa-snippet-item">
      <ExampleClose />
    </div>
  </div>
</template>

<script>
import Examplebasic from '@examples/drawer/basic';
import ExampleClose from '@examples/drawer/close';
export default {
  components: { Examplebasic,ExampleClose },
};
</script>

<style scoped lang="scss">
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

<template>
  <div class="wa-snippet-example">
    <h3 class="wa-snippet-title">Basic Use</h3>
    <div class="wa-snippet-item">
      <ExampleBase />
    </div>
    <h3 class="wa-snippet-title">Accordion</h3>
    <div class="wa-snippet-item">
      <ExampleAccordion />
    </div>
  </div>
</template>

<script>
import ExampleBase from '@examples/collapse/base';
import ExampleAccordion from '@examples/collapse/accordion';
export default {
  components: { ExampleBase, ExampleAccordion },
};
</script>

<style lang="scss">
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

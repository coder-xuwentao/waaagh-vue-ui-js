<template>
  <div class="wa-snippet-example">
    <h3 class="wa-snippet-title">Basic Use</h3>
    <div class="wa-snippet-item">
      <BaseDemo />
    </div>
    <h3 class="wa-snippet-title">Basic Use</h3>
    <div class="wa-snippet-item">
      <AllowHalf />
    </div>
    <h3 class="wa-snippet-title">Basic Use</h3>
    <div class="wa-snippet-item">
      <WithText />
    </div>
    <h3 class="wa-snippet-title">Basic Use</h3>
    <div class="wa-snippet-item">
      <MoreIcons />
    </div>
    <h3 class="wa-snippet-title">Basic Use</h3>
    <div class="wa-snippet-item">
      <ReadOnly />
    </div>
  </div>
</template>

<script>
import BaseDemo from '@examples/rate/Base';
import AllowHalf from '@examples/rate/AllowHalf';
import WithText from '@examples/rate/WithText';
import MoreIcons from '@examples/rate/MoreIcons';
import ReadOnly from '@examples/rate/ReadOnly';
export default {
  components: { BaseDemo, AllowHalf, WithText, MoreIcons, ReadOnly },
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

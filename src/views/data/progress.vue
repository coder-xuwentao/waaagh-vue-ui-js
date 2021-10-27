<template>
  <div class="progress-eg">
    <WaProgress class="is-primary" value="10" max="100"></WaProgress>
    <WaProgress class="is-info" value="25" max="100"></WaProgress>
    <WaProgress class="is-warning" value="50" max="100"></WaProgress>
    <WaProgress class="is-danger" value="75" max="100"></WaProgress>
    <WaProgress class="is-dark" value="100" max="100"></WaProgress>
    <br>
    <WaProgress class="is-info is-small" value="50" max="100"></WaProgress>
    <WaProgress class="is-info is-medium" value="50" max="100"></WaProgress>
    <WaProgress class="is-info is-large" value="50" max="100"></WaProgress>
  </div>
</template>

<script>
import WaProgress from '@/components/data/WaProgress';
export default {
  components: { WaProgress },
};
</script>

<style scoped lang="scss">
.progress-eg{
  margin: 0 auto;
  max-width: 500px;
  progress{
    margin: 1rem 0;
  }
}
</style>

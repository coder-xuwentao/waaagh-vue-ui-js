<template>
  <div class="button-eg">
    <div class="button-eg__center">
      <WaButton>default</WaButton>
      <WaButton class="is-primary">primary</WaButton>
      <WaButton class="is-success">success</WaButton>
      <WaButton class="is-info">info</WaButton>
      <WaButton class="is-warning">warning</WaButton>
      <WaButton class="is-danger">danger</WaButton>
      <hr />
      <WaButton class="is-primary is-outlined">primary</WaButton>
      <WaButton class="is-success is-outlined">success</WaButton>
      <WaButton class="is-info is-outlined">info</WaButton>
      <WaButton class="is-warning is-outlined">warning</WaButton>
      <WaButton class="is-danger is-outlined">danger</WaButton>
      <hr />
      <WaButton class="is-success is-active">is-active</WaButton>
      <WaButton class="is-success is-focused">is-focused</WaButton>
      <WaButton class="is-success is-hover">is-hover</WaButton>
      <hr />
      <WaButton class="no-shadow">no-shadow</WaButton>
      <WaButton class="is-success no-shadow">no-shadow</WaButton>
      <hr />
      <WaButton class="is-primary" disabled>primary</WaButton>
      <WaButton class="is-success" disabled>success</WaButton>
      <WaButton class="is-info" disabled>info</WaButton>
      <WaButton class="is-warning" disabled>warning</WaButton>
      <WaButton class="is-danger" disabled>danger</WaButton>
      <hr />
      <WaButton class="is-primary is-outlined" disabled>primary</WaButton>
      <WaButton class="is-success is-outlined" disabled>success</WaButton>
      <WaButton class="is-info is-outlined" disabled>info</WaButton>
      <WaButton class="is-warning is-outlined" disabled>warning</WaButton>
      <WaButton class="is-danger is-outlined" disabled>danger</WaButton>
    </div>
  </div>
</template>

<script>
import WaButton from '@/components/basic/WaButton';
export default {
  components: {
    WaButton,
  },
};
</script>

<style lang="scss">
.button-eg {
  margin: 0 auto;
  max-width: 600px;
  &__center {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    overflow: hidden;
    * {
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
  }
}

hr {
  margin: 1rem;
  flex-basis: 100%;
  border: none;
}
</style>

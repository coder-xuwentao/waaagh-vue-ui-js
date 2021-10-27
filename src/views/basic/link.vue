<template>
  <div class="link-eg">
    <div class="link-eg__center">
      <WaLink href="javascript:;">default</WaLink>
      <WaLink href="javascript:;" class="is-primary">primary</WaLink>
      <WaLink href="javascript:;" class="is-success">success</WaLink>
      <WaLink href="javascript:;" class="is-info">info</WaLink>
      <WaLink href="javascript:;" class="is-warning">warning</WaLink>
      <WaLink href="javascript:;" class="is-danger">danger</WaLink>
      <hr />
      <WaLink href="javascript:;" class="is-primary is-not-underline">no underline</WaLink>
      <hr />
      <WaLink href="javascript:;" class="is-primary" disabled>disabled</WaLink>
      <WaLink href="javascript:;" class="is-success" disabled>disabled</WaLink>
      <WaLink href="javascript:;" class="is-info" disabled>disabled</WaLink>
      <WaLink href="javascript:;" class="is-warning" disabled>disabled</WaLink>
      <WaLink href="javascript:;" class="is-danger" disabled>disabled</WaLink>
      <!-- or -->
      <!-- <WaLink href="javascript:;" class="is-disabled" disabled>is-disabled</WaLink> -->
    </div>
  </div>
</template>

<script>
import WaLink from '@/components/basic/WaLink';
export default {
  components: { WaLink },
};
</script>

<style lang="scss">
.link-eg {
  margin: 0 auto;
  max-width: 500px;
  &__center {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    overflow: hidden;
    * {
      margin-right: 1rem;
    }
  }
}
hr {
  margin: 1rem;
  flex-basis: 100%;
  border: none;
}
</style>

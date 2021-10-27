<template>
  <div class="badge-eg">
    <div class="badge-eg__center">
      <WaBadge class="is-primary" :value="12">
        <WaButton>badge</WaButton>
      </WaBadge>
      <WaBadge class="is-success" :value="12">
        <WaButton>badge</WaButton>
      </WaBadge>
      <WaBadge class="is-info" :value="12">
        <WaButton>badge</WaButton>
      </WaBadge>
      <WaBadge class="is-warning" :value="12">
        <WaButton>badge</WaButton>
      </WaBadge>
      <WaBadge class="is-danger" :value="12">
        <WaButton>badge</WaButton>
      </WaBadge>
      <WaBadge :value="100" :max="99">
        <WaButton>badge</WaButton>
      </WaBadge>
      <WaBadge isDot>
        <WaButton>badge</WaButton>
      </WaBadge>
    </div>
  </div>
</template>

<script>
import WaBadge from '@/components/data/WaBadge';
import WaButton from '@/components/basic/WaButton';
export default {
  components: { WaBadge, WaButton },
};
</script>

<style scoped lang="scss">
.badge-eg {
  margin: 0 auto;
  max-width: 500px;
  &__center {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    div {
      margin-right: 2rem;
      margin-bottom: 2rem;
    }
  }
}
</style>

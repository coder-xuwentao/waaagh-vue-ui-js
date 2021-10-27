<template>
  <div class="delete-eg">
    <div class="delete-eg__center">
      <div>
        <h3>default:</h3>
        <WaDelete></WaDelete>
      </div>
      <div>
        <h3>is-small:</h3>
        <WaDelete class="is-small"></WaDelete>
      </div>
      <div>
        <h3>is-medium:</h3>
        <WaDelete class="is-medium"></WaDelete>
      </div>
      <div>
        <h3>is-large:</h3>
        <WaDelete class="is-large"></WaDelete>
      </div>
      <div>
        <h3>is-grey:</h3>
        <WaDelete class="is-grey"></WaDelete>
      </div>
      <div>
        <h3>is-primary:</h3>
        <WaDelete class="is-primary"></WaDelete>
      </div>
      <div>
        <h3>is-success:</h3>
        <WaDelete class="is-success"></WaDelete>
      </div>
      <div>
        <h3>is-info:</h3>
        <WaDelete class="is-info"></WaDelete>
      </div>
      <div>
        <h3>is-warning:</h3>
        <WaDelete class="is-warning"></WaDelete>
      </div>
      <div>
        <h3>is-danger:</h3>
        <WaDelete class="is-danger"></WaDelete>
      </div>
    </div>
  </div>
</template>

<script>
import WaDelete from '@/components/basic/WaDelete';
export default {
  components: { WaDelete },
};
</script>

<style lang="scss">
.delete-eg {
  display: flex;
  h3 {
    margin-left: 2rem;
    margin-right: 1rem;
  }
}
.delete-eg {
  margin: 0 auto;
  max-width: 600px;
  &__center {
    display: flex;
    flex-wrap: wrap;
    div{
      margin-bottom: 1rem;
    }
    h3 {
      display: inline-block;
      white-space: nowrap;
    }
  }
}
</style>

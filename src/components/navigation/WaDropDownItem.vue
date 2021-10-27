<template>
  <div :class="{ 'wa-dropdown-item': true, 'is-active': isActive ,'is-disabled':disabled}">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
</style>

<template>
  <div :class="['wa-tab__item', { 'is-active': isActive }]" @click="handleTabclick">
    <nav :class="{ 'wa-tab__item-link': isLink }">
      <slot></slot>
    </nav>
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
    isLink: {
      type: Boolean,
      default: true,
    },
  }
});
</script>
<style lang="scss">
</style>

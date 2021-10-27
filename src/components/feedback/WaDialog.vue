<template>
  <teleport to="body">
    <transition name="wa-dialog-fade">
      <div class="wa-dialog" v-show="visible">
        <div class="wa-dialog__overlay" @click="handleClose">
          <div
            :class="['wa-dialog__body']"
            :style="{ transform: transform, left: left, top: top }"
            @click.stop
          >
            <slot>插槽默认内容1</slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { defineComponent, computed } from 'vue';
export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    top: {
      type: String,
      default: 'transparent',
    },
    left: {
      type: String,
      default: 'transparent',
    },
    transform: {
      type: String,
      default: 'transparent',
    },
  },
  setup(props, ctx) {
    const visible = computed(() => props.modelValue);

    const handleClose = () => {
      ctx.emit('update:modelValue', false);
      ctx.emit('close', props.modelValue);
    };

    return {
      visible,
      handleClose,
    };
  },
});
</script>

<style lang="scss">
$drawer-background-color: #fff;
$transition-duration: 0.3s;

.wa-dialog {
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2000;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: auto;
  }
  &__body {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    box-sizing: border-box;
    background-color: $drawer-background-color;
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    transition: all $transition-duration;
  }
}
.wa-dialog-fade {
  &-enter-active,
  &-leave-active {
    transition: all $transition-duration;
  }

  &-enter-from,
  &-enter-active,
  &-enter-to,
  &-leave-from,
  &-leave-active,
  &-leave-to {
    overflow: hidden !important;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    .wa-dialog__body {
      margin-top: -2rem;
    }
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
    .wa-dialog__body {
      margin-top: 0rem;
    }
  }
}
</style>

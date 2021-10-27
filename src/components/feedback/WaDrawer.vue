<template>
  <teleport to="body">
    <transition name="wa-drawer-fade">
      <div class="wa-drawer" v-show="visible">
        <div class="wa-drawer__overlay" @click="handleClose">
          <div :class="['wa-drawer__body', direction]" :style="bodyWidthStyle" @click.stop>
            <slot>插槽默认内容1</slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
export default defineComponent({
  props: {
    direction: {
      type: String,
      default: 'rtl',
      validator: (val) => {
        return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1;
      },
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    bodyWidth: {
      type: String,
      default: 'auto',
    },
  },
  setup(props, ctx) {
    const visible = computed(() => props.modelValue);
    const bodyWidthStyle = computed(() => {
      if (['ltr', 'rtl'].includes(props.direction)) return { width: props.bodyWidth };
      else return { height: props.bodyWidth };
    });

    const handleClose = () => {
      ctx.emit('update:modelValue', false);
    };

    return {
      visible,
      handleClose,
      bodyWidthStyle,
    };
  },
});
</script>

<style lang="scss">
$drawer-background-color: #fff;
$transition-duration: 0.3s;
$directions: rtl, ltr, ttb, btt;

.wa-drawer {
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
    box-sizing: border-box;
    background-color: $drawer-background-color;
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    transition: all $transition-duration;

    &.ltr,
    &.rtl {
      height: 100%;
      top: 0;
      bottom: 0;
    }

    &.ttb,
    &.btt {
      width: 100%;
      left: 0;
      right: 0;
    }

    &.ltr {
      left: 0;
    }

    &.rtl {
      right: 0;
    }

    &.ttb {
      top: 0;
    }

    &.btt {
      bottom: 0;
    }
  }

  @each $direction in $directions {
    .#{$direction} {
      transform: translate(0, 0);
    }
  }
}

.wa-drawer-fade {
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
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
  }

  &-enter-from,
  &-leave-to {
    @each $direction in $directions {
      .#{$direction} {
        @if $direction == ltr {
          transform: translateX(-100%);
        }

        @if $direction == rtl {
          transform: translateX(100%);
        }

        @if $direction == ttb {
          transform: translateY(-100%);
        }

        @if $direction == btt {
          transform: translateY(100%);
        }
      }
    }
  }
}
</style>

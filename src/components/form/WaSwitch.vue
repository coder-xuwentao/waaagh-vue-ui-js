<template>
  <div
    :class="['wa-switch', { 'is-disabled': switchDisabled, 'is-checked': checked }]"
    role="switch"
    @click.prevent="switchValue"
  >
    <span ref="core" class="wa-switch__core" :style="{ width: (width || 40) + 'px' }">
      <div class="wa-switch__action">
        <i v-if="loading" class="wa-switch__icon-loading icon-spinner"></i>
      </div>
    </span>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
export default defineComponent({
  name: 'wa-switch',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
    // 默认本地value
    switchDisabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 40,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    beforeChange: Function,
  },
  emits: ['update:modelValue', 'change'],
  setup(props, ctx) {
    const checked = computed(() => {
      return props.modelValue || props.value;
    });
    const waitingPromise = ref(false);
    const switchDisabled = computed(() => {
      return props.disabled || props.loading || waitingPromise.value;
    });

    const switchValue = () => {
      if (switchDisabled.value) return;

      const { beforeChange } = props;
      if (!beforeChange) {
        handleChange();
        return;
      }

      const shouldChange = beforeChange();
      const isPromise = shouldChange instanceof Promise;
      const isBoolean = shouldChange instanceof Boolean;
      const isExpectType = [isPromise, isBoolean].some((i) => i);
      if (!isExpectType) {
        throw new Error('beforeChange must return type `Promise<boolean>` or `boolean`');
      }
      if (isPromise) {
        waitingPromise.value = true;
        shouldChange
          .then((result) => {
            if (result) {
              handleChange();
              waitingPromise.value = false;
            }
          })
          .catch((e) => {
            console.warn(`some error occurred: ${e}`);
          });
      } else if (shouldChange) {
        handleChange();
      }
    };

    const handleChange = () => {
      // change checked
      const val = !checked.value;
      ctx.emit('update:modelValue', val);
      ctx.emit('change', val);
    };

    return {
      switchDisabled,
      checked,
      handleChange,
      switchValue,
      focus,
    };
  },
});
</script>

<style scoped lang="scss">
$switch-on-color: #409eff;
$switch-off-color: #dcdfe6;
$switch-font-size: 14px;
$switch-core-border-radius: 10px;
$switch-width: 40px;
$switch-height: 20px;
$switch-button-size: 16px;

$transition-duration: 0.2s;
$border-radius-circle: 100%;

.wa-switch {
  $root-selector: &;

  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: $switch-font-size;
  line-height: $switch-height;
  height: $switch-height;
  vertical-align: middle;
  &.is-disabled {
    cursor: not-allowed;
  }

  &__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: $switch-width;
    height: $switch-height;
    border: 1px solid $switch-off-color;
    outline: none;
    border-radius: $switch-core-border-radius;
    box-sizing: border-box;
    background: $switch-off-color;
    cursor: pointer;
    transition: border-color $transition-duration, background-color $transition-duration;
    vertical-align: middle;

    #{$root-selector}__action {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: $border-radius-circle;
      transition: all $transition-duration;
      width: $switch-button-size;
      height: $switch-button-size;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $switch-off-color;
    }
  }

  &.is-checked {
    #{$root-selector}__core {
      border-color: $switch-on-color;
      background-color: $switch-on-color;
      #{$root-selector}__action {
        left: 100%;
        margin-left: calc(-1px - $switch-button-size);
        color: $switch-on-color;
      }
    }
  }

  .icon-spinner {
    transform: scale(var(--ggs, 1));
  }

  .icon-spinner,
  .icon-spinner::after,
  .icon-spinner::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: $switch-font-size;
    height: $switch-font-size;
  }

  .icon-spinner::after,
  .icon-spinner::before {
    content: '';
    position: absolute;
    border-radius: 100px;
  }

  .icon-spinner::before {
    animation: spinner 1s cubic-bezier(0.6, 0, 0.4, 1) infinite;
    border: 2px solid transparent;
    border-top-color: currentColor;
  }

  .icon-spinner::after {
    border: 2px solid;
    opacity: 0.2;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
}
</style>

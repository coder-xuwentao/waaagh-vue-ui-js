<template>
  <div class="wa-badge">
    <slot></slot>
    <sup
      v-show="!hidden && (content || content === '0' || isDot)"
      class="wa-badge__content"
      :class="{ 'is-fixed': $slots.default, 'is-dot': isDot }"
      v-text="content"
    >
    </sup>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    max: {
      type: Number,
      default: 99,
    },
    isDot: Boolean,
    hidden: Boolean,
  },
  computed: {
    content() {
      if (this.isDot) return '';
      if (typeof this.value === 'number' && typeof this.max === 'number') {
        return this.max < this.value ? `${this.max}+` : `${this.value}`;
      }
      return `${this.value}`;
    },
  },
};
</script>

<style scoped lang="scss">
$badge-background-color: hsl(14, 100%, 53%) !default;
$badge-color: #fff;
$badge-radius: 10px;
$badge-font-size: 12px;
$badge-padding: 6px;
$badge-size: 18px;
$badge-background-colors: (
  'primary': hsl(171, 100%, 41%),
  'success': hsl(153, 53%, 53%),
  'info': hsl(207, 61%, 53%),
  'warning': hsl(44, 80%, 47%),
  'danger': hsl(348, 86%, 61%),
);
.wa-badge {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  &__content {
    background-color: $badge-background-color;
    border-radius: $badge-radius;
    color: $badge-color;
    display: inline-block;
    font-size: $badge-font-size;
    height: $badge-size;
    line-height: $badge-size;
    padding: 0 $badge-padding;
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap;
    border: 1px solid $badge-color;

    &.is-fixed {
      position: absolute;
      top: 0;
      right: calc(1px + $badge-size / 2);
      transform: translateY(-50%) translateX(100%);
      &.is-dot {
        right: 5px;
      }
    }
    &.is-dot {
      height: 8px;
      width: 8px;
      padding: 0;
      right: 0;
      border-radius: 50%;
    }
  }
  @each $name, $bgcolor in $badge-background-colors {
    $selector: &;
    &.is-#{$name} {
      #{$selector}__content {
        background-color: $bgcolor;
      }
    }
  }
}
</style>

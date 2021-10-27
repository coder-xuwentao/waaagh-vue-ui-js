<template>
  <div
    :class="[
      'wa-tab',
      {
        [`is-${size}`]: size,
        'is-boxed': isBoxed,
        'is-fullwidth': isFullwidth,
        'is-toggle': isToggle,
        'is-toggle-rounded': isToggleRounded,
      },
    ]"
  >
    <div :class="['wa-tab__list', `is-${position}`]">
      <!-- slot wil be WatabItems -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, computed, watch } from 'vue';

export default defineComponent({
  props: {
    position: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right', 'center'].includes(value);
      },
    },
    size: {
      type: String,
      default: '',
      validator(value) {
        return ['small', 'medium', 'large', ''].includes(value);
      },
    },
    isBoxed: {
      type: Boolean,
      default: false,
    },
    isFullwidth: {
      type: Boolean,
      default: false,
    },
    isToggle: {
      type: Boolean,
      default: false,
    },
    isToggleRounded: {
      type: Boolean,
      default: false,
    },
  },
});
</script>


<style lang="scss">
// Sizes
$size-small: 0.75rem !default;
$size-normal: 1rem !default;
$size-medium: 1.25rem !default;
$size-large: 1.5rem !default;
// base
$link: hsl(229, 53%, 53%) !default;
$link-invert: #fff !default;
$text-strong: hsl(0, 0%, 21%) !default;
$background: hsl(0, 0%, 96%) !default;
$border: hsl(0, 0%, 86%) !default;
$border-hover: hsl(0, 0%, 71%) !default;
$radius: 4px !default;
$radius-rounded: 9999px !default;
// normal
$tabs-border-bottom-color: #dbdbdb !default;
$tabs-border-bottom-style: solid !default;
$tabs-border-bottom-width: 1px !default;
$tabs-link-color: #4a4a4a !default;
$tabs-link-hover-border-bottom-color: $text-strong !default;
$tabs-link-hover-color: $text-strong !default;
$tabs-link-active-border-bottom-color: $link !default;
$tabs-link-active-color: $link !default;
$tabs-link-padding: 0.5em 1em !default;
// boxed
$tabs-boxed-link-radius: $radius !default;
$tabs-boxed-link-hover-background-color: $background !default;
$tabs-boxed-link-hover-border-bottom-color: $border !default;
$tabs-boxed-link-active-background-color: #fff !default;
$tabs-boxed-link-active-border-color: $border !default;
$tabs-boxed-link-active-border-bottom-color: transparent !default;
// toggle
$tabs-toggle-link-border-color: $border !default;
$tabs-toggle-link-border-style: solid !default;
$tabs-toggle-link-border-width: 1px !default;
$tabs-toggle-link-hover-background-color: $background !default;
$tabs-toggle-link-hover-border-color: $border-hover !default;
$tabs-toggle-link-radius: $radius !default;
$tabs-toggle-link-active-background-color: $link !default;
$tabs-toggle-link-active-border-color: $link !default;
$tabs-toggle-link-active-color: $link-invert !default;

.wa-tab {
  user-select: none;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  // white-space: nowrap;
  font-size: $size-normal;

  &__list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom-color: $tabs-border-bottom-color;
    border-bottom-style: $tabs-border-bottom-style;
    border-bottom-width: $tabs-border-bottom-width;
    flex-grow: 1;
    flex-shrink: 0;
    &.is-left {
      // default
    }
    &.is-center {
      justify-content: center;
    }
    &.is-right {
      justify-content: flex-end;
    }
  }

  &__item {
    display: block;

    &-link {
      cursor: pointer;
      align-items: center;
      border-bottom-color: $tabs-border-bottom-color;
      border-bottom-style: $tabs-border-bottom-style;
      border-bottom-width: $tabs-border-bottom-width;
      color: $tabs-link-color;
      display: flex;
      justify-content: center;
      margin-bottom: -#{$tabs-border-bottom-width};
      padding: $tabs-link-padding;
      vertical-align: top;

      &:hover {
        border-bottom-color: $tabs-link-hover-border-bottom-color;
        color: $tabs-link-hover-color;
      }
    }

    $item-selector: &;
    &.is-active {
      #{$item-selector}-link {
        border-bottom-color: $tabs-link-active-border-bottom-color;
        color: $tabs-link-active-color;
      }
    }
  }

  &.is-small {
    font-size: $size-small;
  }
  &.is-medium {
    font-size: $size-medium;
  }
  &.is-large {
    font-size: $size-large;
  }

  // is-fullwidth
  $root: &;
  &.is-fullwidth {
    #{$root}__item {
      flex-grow: 1;
      flex-shrink: 0;
    }
  }
  // is-boxed
  $root: &;
  &.is-boxed {
    #{$root}__item {
      &-link {
        border: 1px solid transparent;
        border-radius: $tabs-boxed-link-radius $tabs-boxed-link-radius 0 0;
        &:hover {
          background-color: $tabs-boxed-link-hover-background-color;
          border-bottom-color: $tabs-boxed-link-hover-border-bottom-color;
        }
      }

      &.is-active {
        #{$root}__item-link {
          background-color: $tabs-boxed-link-active-background-color;
          border-color: $tabs-boxed-link-active-border-color;
          border-bottom-color: $tabs-boxed-link-active-border-bottom-color !important;
        }
      }
    }
  }
  // is-toggle and is-toggle-rounded
  $root: &;
  &.is-toggle,
  &.is-toggle-rounded {
    #{$root}__item-link {
      border-color: $tabs-toggle-link-border-color;
      border-style: $tabs-toggle-link-border-style;
      border-width: $tabs-toggle-link-border-width;
      margin-bottom: 0;
      position: relative;
      &:hover {
        background-color: $tabs-toggle-link-hover-background-color;
        border-color: $tabs-toggle-link-hover-border-color;
        z-index: 2;
      }
    }
    #{$root}__item {
      & + #{$root}__item {
        margin: -$tabs-toggle-link-border-width;
      }
      &:first-child #{$root}__item-link {
        border-top-left-radius: $tabs-toggle-link-radius;
        border-bottom-left-radius: $tabs-toggle-link-radius;
      }
      &:last-child #{$root}__item-link {
        border-top-right-radius: $tabs-toggle-link-radius;
        border-bottom-right-radius: $tabs-toggle-link-radius;
      }
      &.is-active {
        #{$root}__item-link {
          background-color: $tabs-toggle-link-active-background-color;
          border-color: $tabs-toggle-link-active-border-color;
          color: $tabs-toggle-link-active-color;
          z-index: 1;
        }
      }
    }

    #{$root}__list {
      border-bottom: none;
    }
  }
  &.is-toggle-rounded {
    #{$root}__item {
      &:first-child #{$root}__item-link {
        border-bottom-left-radius: $radius-rounded;
        border-top-left-radius: $radius-rounded;
        padding-left: 1.25em;
      }
      &:last-child #{$root}__item-link {
        border-bottom-right-radius: $radius-rounded;
        border-top-right-radius: $radius-rounded;
        padding-right: 1.25em;
      }
    }
  }
}
</style>

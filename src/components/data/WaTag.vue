<template>
  <span
    v-if="!disableTransitions"
    class="wa-tag"
    :style="{ backgroundColor: color }"
    @click="handleClick"
  >
    <slot></slot>
    <span v-if="closable" class="wa-tag__close" @click="handleClose">
      <slot name="close">
        <button class="wa-tag__close--default"></button>
      </slot>
    </span>
  </span>
  <transition v-else name="wa-zoom-in-center">
    <span class="wa-tag" :style="{ backgroundColor: color }" @click="handleClick">
      <slot></slot>
      <span v-if="closable" class="wa-tag__close" @click="handleClose">
        <slot name="close">
          <button class="wa-tag__close--default"></button>
        </slot>
      </span>
    </span>
  </transition>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    closable: Boolean,
    hit: Boolean,
    disableTransitions: Boolean,
    color: {
      type: String,
      default: '',
    },
  },
  emits: ['close', 'click'],
  setup(props, { emit }) {
    // methods
    const handleClose = (event) => {
      emit('close', event);
    };

    const handleClick = (event) => {
      emit('click', event);
    };

    return {
      handleClose,
      handleClick,
    };
  },
});
</script>

<style scoped lang="scss">
@use "sass:map";

$tag-background-color: hsl(0, 0%, 95%);
$tag-radius: 4px !default;
$tag-color: hsl(0, 0%, 29%) !default;
$tag-font-size: 1rem;
$tag-padding: 0.5rem;
$tag-colors: (
  'primary': hsl(171, 100%, 41%),
  'success': hsl(153, 53%, 53%),
  'link': hsl(229, 53%, 53%),
  'info': hsl(207, 61%, 53%),
  'warning': hsl(44, 80%, 47%),
  'danger': hsl(348, 86%, 61%),
);

$tag-light-colors: (
  'primary': hsl(171, 100%, 95%),
  'success': hsl(153, 53%, 90%),
  'link': hsl(229, 53%, 93%),
  'info': hsl(207, 61%, 93%),
  'warning': hsl(44, 80%, 90%),
  'danger': hsl(348, 86%, 93%),
);

.wa-tag {
  background-color: $tag-background-color;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: $tag-radius;
  color: $tag-color;
  display: inline-flex;
  align-items: center;
  font-size: $tag-font-size;
  height: 2em;
  line-height: 1.5;
  padding-left: $tag-padding;
  padding-right: $tag-padding;
  white-space: nowrap;
  @each $name, $color in $tag-colors {
    $light-color: map.get($tag-light-colors, $name);
    &.is-#{$name} {
      color: #fff;
      background-color: $color;
      border: 1px solid $color;
      &.is-light {
        color: $color;
        border: 1px solid lighten($color, 50%);
        background-color: $light-color;
      }
      &.is-plain {
        color: darken($color, 10%);
        background-color: #fff;
        border: 1px solid darken($color, 10%);
      }
    }
  }
  &__close {
    display: inline-flex;
    margin-left: 0.25em;
    &--default {
      display: inline-block;
      background-color: rgba(10, 10, 10, 0.2);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      height: $tag-font-size;
      width: $tag-font-size;
      outline: none;
      position: relative;
      vertical-align: middle;
      &::before,
      &::after {
        background-color: #fff;
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
        transform-origin: center center;
      }
      &::before {
        height: 2px;
        width: 50%;
      }
      &::after {
        height: 50%;
        width: 2px;
      }
      &:hover,
      &:focus {
        background-color: rgba(10, 10, 10, 0.3);
      }
      &:active {
        background-color: rgba(10, 10, 10, 0.4);
      }
    }
  }
}

// transition
.wa-zoom-in-center-enter-active,
.wa-zoom-in-center-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.wa-zoom-in-center-enter-from,
.wa-zoom-in-center-leave-active {
  opacity: 0;
  transform: scaleX(0);
}
</style>

<template>
  <div :class="['wa-dropdown', { 'is-right': isRight, 'is-up': isUp }]">
    <div class="wa-dropdown__trigger">
      <button class="wa-dropdown__button" @click="handleClick">
        <slot name="button"></slot>
      </button>
    </div>
    <transition v-on="onDrop">
      <div class="wa-dropdown__menu" v-show="visible">
        <div class="wa-dropdown__content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'WaDropdown',
  props: {
    isRight: {
      type: Boolean,
      default: false,
    },
    isUp: {
      type: Boolean,
      default: false,
    },
  },
  emits:['click'],
  setup(props, { emit }) {
    const visible = ref(false);
    const handleClick = () => {
      visible.value = !visible.value;
      emit('click', visible.value);
    };

    const onDrop = {
      beforeEnter(el) {
        el.classList.add('dropdown-transition');
        if (!el.dataset) el.dataset = {};

        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.height = '0';
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },

      enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
          el.style.height = `${el.scrollHeight}px`;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
          el.style.height = '';
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }

        el.style.overflow = 'hidden';
      },

      afterEnter(el) {
        el.classList.remove('dropdown-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
      },

      beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;

        el.style.height = `${el.scrollHeight}px`;
        el.style.overflow = 'hidden';
      },

      leave(el) {
        if (el.scrollHeight !== 0) {
          el.classList.add('dropdown-transition');
          el.style.transitionProperty = 'height';
          el.style.height = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },

      afterLeave(el) {
        el.classList.remove('dropdown-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      },
    };

    return {
      visible,
      handleClick,
      onDrop,
    };
  },
});
</script>

<style lang="scss">
$dropdown-menu-min-width: 12rem !default;

$dropdown-content-background-color: #fff !default;
$dropdown-content-arrow: hsl(229, 53%, 53%) !default;
$dropdown-content-offset: 4px !default;
$dropdown-content-padding-bottom: 0.5rem !default;
$dropdown-content-padding-top: 0.5rem !default;
$dropdown-content-radius: 4px !default;
$dropdown-content-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%) !default;
$dropdown-content-z: 20 !default;

$dropdown-item-color: #4a4a4a !default;
$dropdown-item-hover-color: hsl(0, 0%, 4%) !default;
$dropdown-item-hover-background-color: hsl(0, 0%, 96%) !default;
$dropdown-item-active-color: hsl(0, 0%, 96%) !default;
$dropdown-item-active-background-color: hsl(229, 53%, 53%) !default;

$dropdown-divider-background-color: hsl(229, 53%, 53%) !default;

.wa-dropdown {
  $root: &;
  display: inline-flex;
  position: relative;
  vertical-align: top;
  &.is-active,
  &.is-hoverable:hover {
    .dropdown-menu {
      display: block;
    }
  }
  &.is-right {
    #{$root}__menu {
      left: auto;
      right: 0;
    }
  }

  &.is-up {
    #{$root}__menu {
      bottom: 100%;
      padding-bottom: $dropdown-content-offset;
      padding-top: initial;
      top: auto;
    }
  }

  &__menu {
    display: block;
    left: 0;
    min-width: $dropdown-menu-min-width;
    position: absolute;
    top: 100%;
    z-index: $dropdown-content-z;
    box-shadow: $dropdown-content-shadow;
  }
  &__content {
    margin-top: $dropdown-content-offset;
    background-color: $dropdown-content-background-color;
    border-radius: $dropdown-content-radius;
    padding-bottom: $dropdown-content-padding-bottom;
    padding-top: $dropdown-content-padding-top;
  }
  &-item {
    cursor: pointer;
    color: $dropdown-item-color;
    display: block;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 0.375rem 1rem;
    position: relative;
  }

  &-item,
  &-item {
    padding-right: 3rem;
    text-align: inherit;
    white-space: nowrap;
    width: 100%;
    &:hover {
      background-color: $dropdown-item-hover-background-color;
      color: $dropdown-item-hover-color;
    }
    &.is-active {
      background-color: $dropdown-item-active-background-color;
      color: $dropdown-item-active-color;
    }
    &.is-disabled {
      cursor: not-allowed;
      opacity: 0.7;
      &:hover {
        background-color: transparent;
        color: $dropdown-item-color;
      }
    }
  }
  &-divider {
    background-color: $dropdown-divider-background-color;
    border: none;
    display: block;
    height: 1px;
    margin: 0.5rem 0;
  }
  &__button {
    outline: none;
    color: hsl(0, 0%, 21%);
    background-color: #fff;
    cursor: pointer;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 0.5em 1em;
    text-align: center;
    white-space: nowrap;

    border: 1px solid hsl(0, 0%, 75%);
    border-radius: 0.375em;
    box-shadow: none;
    font-size: 1rem;
    height: 2.5em;
    line-height: 1.5;
    vertical-align: top;
    &:hover {
      // background-color: hsl(0, 0%, 93%);
      border-color: hsl(0, 0%, 50%);
      opacity: 0.75;
    }
    &:focus {
      // background-color: hsl(0, 0%, 93%) ;
      border-color: hsl(207, 61%, 25%);
      opacity: 1;
      &:not(:active):not(.no-shadow) {
        box-shadow: 0 0 0 0.125em hsl(207, 61%, 90%);
      }
    }
    &:active {
      background-color: hsl(0, 0%, 93%);
      border-color: hsl(0, 0%, 25%);
      opacity: 1;
    }
  }
}

// animation
$transition-duration: 0.2s;
.dropdown-transition {
  transition: $transition-duration height ease-in-out, $transition-duration padding-top ease-in-out,
    $transition-duration padding-bottom ease-in-out;
}
</style>

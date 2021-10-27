<template>
  <button class="wa-button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss">
@use "sass:map";

// color default
$button-color: hsl(0, 0%, 21%) !default;
$button-background-color: #fff !default;
// colors
$button-colors: (
  'primary': #fff,
  'success': #fff,
  'info': #fff,
  'warning': #fff,
  'danger': #fff,
);
$button-background-colors: (
  'primary': hsl(171, 100%, 41%),
  'success': hsl(153, 53%, 53%),
  'info': hsl(207, 61%, 53%),
  'warning': hsl(44, 80%, 47%),
  'danger': hsl(348, 86%, 61%),
);

// padding
$button-padding-vertical: 0.5em !default;
$button-padding-horizontal: 1em !default;
// border
$button-border-width: 1px !default;
$button-border-color: hsl(0, 0%, 75%) !default;
$button-border-radius: 0.375em !default;
// darker
$button-darker-background-color: hsl(0, 0%, 93%) !default;
$button-darker-border-color: hsl(0, 0%, 25%) !default;
// focus
$button-focus-box-shadow-size: 0 0 0 0.125em !default;
$button-focus-box-shadow-color: hsl(0, 0%, 93%) !default;
// hover
$button-hover-background-color: hsl(0, 0%, 93%) !default;

.wa-button {
  color: $button-color;
  background-color: $button-background-color;
  cursor: pointer;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: $button-padding-vertical $button-padding-horizontal;
  text-align: center;
  white-space: nowrap;

  border: $button-border-width solid $button-border-color;
  border-radius: $button-border-radius;
  box-shadow: none;
  font-size: 1rem;
  height: 2.5em;
  line-height: 1.5;
  vertical-align: top;

  &:hover,
  &.is-hover {
    background-color: $button-hover-background-color;
    opacity: 0.75;
  }
  &:focus,
  &.is-focused {
    background-color: $button-darker-background-color;
    border-color: $button-darker-border-color;
    opacity: 1;
    &:not(:active):not(.no-shadow) {
      box-shadow: $button-focus-box-shadow-size $button-focus-box-shadow-color;
    }
  }
  &.is-active,
  &:active {
    background-color: $button-darker-background-color;
    border-color: $button-darker-border-color;
    opacity: 1;
  }
  &.is-disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &.is-disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
  // colors
  @each $name, $bgcolor in $button-background-colors {
    $dark-bgcolor: darken($bgcolor, 3.75%);
    $shadow: rgba($dark-bgcolor, 0.25);
    $color: map.get($button-colors, $name);
    &.is-#{$name} {
      color: $color;
      background-color: $bgcolor;
      border-color: $bgcolor;
      &:hover,
      &.is-hover {
        color: $color;
        border-color: transparent;
        background-color: $dark-bgcolor;
      }
      &:focus,
      &.is-focused {
        color: $color;
        border-color: transparent;
        &:not(:active):not(.no-shadow) {
          box-shadow: $button-focus-box-shadow-size $shadow;
        }
      }
      &.is-active,
      &:active {
        color: $color;
        border-color: transparent;
        background-color: $dark-bgcolor;
      }
      &.is-disabled,
      &[disabled] {
        color: $color;
        background-color: $dark-bgcolor;
      }

      &.is-outlined {
        background-color: transparent;
        border-color: $dark-bgcolor;
        color: $dark-bgcolor;
        &:hover,
        &.is-hovered,
        &:focus,
        &.is-focused {
          background-color: $dark-bgcolor;
          border-color: transparent;
          color: $color;
        }
        &.is-disabled,
        &[disabled] {
          background-color: transparent;
          border-color: $dark-bgcolor;
          color: $dark-bgcolor;
        }
      }
    }
  }
}
</style>

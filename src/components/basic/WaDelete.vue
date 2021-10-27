<template>
  <button class="wa-delete"></button>
</template>

<script>
export default {};
</script>

<style lang="scss">
$radius-rounded: 50%;
$delete-font-color: #fff;
$delete-background-color: rgba(10, 10, 10, 0.2);
$delete--hover-background-color: rgba(10, 10, 10, 0.3);
$delete--active-background-color: rgba(10, 10, 10, 0.4);

$delete-colors: (
  'grey': hsl(0, 0%, 40%),
  'primary': hsl(171, 100%, 41%),
  'success': hsl(153, 53%, 53%),
  'info': hsl(207, 61%, 53%),
  'warning': hsl(44, 80%, 47%),
  'danger': hsl(348, 86%, 61%),
);

@mixin setFontColor($color) {
  &::before,
  &::after {
    background-color: $color;
  }
}

.wa-delete {
  user-select: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: $delete-background-color;
  border: none;
  border-radius: $radius-rounded;
  cursor: pointer;
  pointer-events: auto;
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 0;
  height: 20px;
  max-height: 20px;
  max-width: 20px;
  min-height: 20px;
  min-width: 20px;
  outline: none;
  position: relative;
  vertical-align: top;
  width: 20px;
  @include setFontColor($delete-font-color);
  &::before,
  &::after {
    // background-color: $delete-font-color;
    content: '';
    display: block;
    left: 50%;
    position: absolute;
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
    background-color: $delete--hover-background-color;
  }
  &:active {
    background-color: $delete--active-background-color;
  }

  @each $name, $color in $delete-colors {
    &.is-#{$name} {
      background-color: transparent;

      @include setFontColor($color);
      &:hover,
      &:focus {
        background-color: lighten($color, 8%);
        @include setFontColor(#fff);
      }
      &:active {
        background-color: $color;
        @include setFontColor(#fff);
      }
    }
  }

  // Sizes
  &.is-small {
    height: 16px;
    max-height: 16px;
    max-width: 16px;
    min-height: 16px;
    min-width: 16px;
    width: 16px;
  }
  &.is-medium {
    height: 24px;
    max-height: 24px;
    max-width: 24px;
    min-height: 24px;
    min-width: 24px;
    width: 24px;
  }
  &.is-large {
    height: 32px;
    max-height: 32px;
    max-width: 32px;
    min-height: 32px;
    min-width: 32px;
    width: 32px;
  }
}
</style>

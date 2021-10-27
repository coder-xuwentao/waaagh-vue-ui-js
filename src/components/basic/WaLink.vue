<template>
  <a class="wa-link">
    <slot></slot>
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss">
@use "sass:map";

$link-color: #606266 !default;
$link-hover-color: #409eff !default;
$link-colors: (
  'primary': hsl(171, 100%, 41%),
  'success': hsl(153, 53%,  53%),
  'info': hsl(207, 61%, 53%),
  'warning': hsl(44, 80%, 47%),
  'danger': hsl(348, 86%, 61%),
);


.wa-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  color: $link-color;
  &:hover {
    color: $link-hover-color;
    text-decoration: underline;
  }
  @each $name, $color in $link-colors {
    $hover-color: darken($color, 10%);
    &.is-#{$name} {
      color: $color;
      &:hover {
        color: $hover-color;
      }
      &.is-disabled,
      &[disabled] {
        color: $color;
      }
    }
  }
  &.is-disabled,
  &[disabled] {
    cursor: not-allowed;
    color: $link-color;
    opacity: 0.5;
    text-decoration: none;
  }
  &.is-not-underline {
    text-decoration: none;
  }
}
</style>

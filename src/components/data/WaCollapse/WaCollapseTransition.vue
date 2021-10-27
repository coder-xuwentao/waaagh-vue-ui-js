<template>
  <transition v-on="on">
    <slot></slot>
  </transition>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WaCollapseTransition',
  setup() {
    return {
      on: {
        beforeEnter(el) {
          el.classList.add('collapse-transition');
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
          // for safari: remove class then reset height is necessary
          el.classList.remove('collapse-transition');
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
            // for safari: add class after set height, or it will jump to zero height suddenly, weired
            el.classList.add('collapse-transition');
            // fix #968 collapse animation failure.
            // in vue3.0.4, transitionProperty is set 'none' to avoid 'v-leave-from' issue
            el.style.transitionProperty = 'height';
            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
          }
        },

        afterLeave(el) {
          el.classList.remove('collapse-transition');
          el.style.height = '';
          el.style.overflow = el.dataset.oldOverflow;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        },
      },
    };
  },
});
</script>

<style lang="scss">
$transition-duration: 0.3s;
.collapse-transition {
  transition: $transition-duration height ease-in-out, $transition-duration padding-top ease-in-out,
    $transition-duration padding-bottom ease-in-out;
}
</style>

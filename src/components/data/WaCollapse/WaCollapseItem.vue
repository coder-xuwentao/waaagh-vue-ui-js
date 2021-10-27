<template>
  <div class="wa-collapse-item" :class="{ 'is-active': isActive, 'is-disabled': disabled }">
    <div role="tab">
      <div
        :id="`wa-collapse-head-${id}`"
        class="wa-collapse-item__header"
        role="button"
        :tabindex="disabled ? -1 : 0"
        :class="{
          focusing: focusing,
          'is-active': isActive,
        }"
        @click="handleHeaderClick"
        @keyup.space.enter.stop="handleEnterClick"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{ title }}</slot>
        <i
          class="wa-collapse-item__arrow wa-icon-arrow-right"
          :class="{ 'is-active': isActive }"
        >

        </i>
      </div>
    </div>
    <WaCollapseTransition>
      <div
        v-show="isActive"
        :id="`wa-collapse-content-${id}`"
        class="wa-collapse-item__wrap"
        role="tabpanel"
      >
        <div class="wa-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </WaCollapseTransition>
  </div>
</template>
<script>
import { computed, defineComponent, inject, ref } from 'vue';
import WaCollapseTransition from './WaCollapseTransition.vue';

const generateId = () => Math.floor(Math.random() * 10000);
export default defineComponent({
  name: 'WaCollapseItem',
  components: { WaCollapseTransition },
  props: {
    title: {
      type: String,
      default: '',
    },
    name: {
      type: [String, Number],
      default: () => {
        return () => generateId();
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const collapse = inject('collapse');
    const contentWrapStyle = ref({ height: 'auto', display: 'block' });
    const contentHeight = ref(0);
    const focusing = ref(false);
    const isClick = ref(false);
    const id = generateId();

    const isActive = computed(() => {
      return collapse?.activeNames.value.indexOf(props.name) > -1;
    });

    const handleFocus = () => {
      setTimeout(() => {
        if (!isClick.value) {
          focusing.value = true;
        } else {
          isClick.value = false;
        }
      }, 50);
    };

    const handleHeaderClick = () => {
      if (props.disabled) return;
      collapse?.handleItemClick(props.name);
      focusing.value = false;
      isClick.value = true;
    };

    const handleEnterClick = () => {
      collapse?.handleItemClick(props.name);
    };

    return {
      isActive,
      contentWrapStyle,
      contentHeight,
      focusing,
      isClick,
      id,
      handleFocus,
      handleHeaderClick,
      handleEnterClick,
      collapse,
    };
  },
});
</script>

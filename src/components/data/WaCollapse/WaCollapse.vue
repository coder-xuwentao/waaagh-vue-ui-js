<template>
  <div class="wa-collapse" role="tablist">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, ref, watch, provide } from 'vue';

const CHANGE_EVENT = 'change';
const UPDATE_MODEL_EVENT = 'update:modelValue';

export default defineComponent({
  name: '',
  props: {
    accordion: Boolean,
    modelValue: {
      type: [Array, String, Number],
      default: () => [],
    },
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
  setup(props, { emit }) {
    // data
    const activeNames = ref([].concat(props.modelValue));

    // method
    const setActiveNames = (_activeName) => {
      activeNames.value = [].concat(_activeName);
      const value = props.accordion ? activeNames.value[0] : activeNames.value;
      emit(UPDATE_MODEL_EVENT, value);
      emit(CHANGE_EVENT, value);
    };

    const handleItemClick = (name) => {
      if (props.accordion) {
        setActiveNames(
          (activeNames.value[0] || activeNames.value[0] === 0) && activeNames.value[0] === name
            ? ''
            : name,
        );
      } else {
        const _activeName = activeNames.value.slice(0);
        const index = _activeName.indexOf(name);
        if (index > -1) {
          _activeName.splice(index, 1);
        } else {
          _activeName.push(name);
        }
        setActiveNames(_activeName);
      }
    };

    watch(
      () => props.modelValue,
      () => {
        activeNames.value = [].concat(props.modelValue);
      },
    );

    provide('collapse', {
      activeNames,
      handleItemClick,
    });

    return {
      activeNames,
      setActiveNames,
      handleItemClick,
    };
  },
});
</script>

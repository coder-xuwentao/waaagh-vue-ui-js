<template>
  <div class="wa-rate" role="slider" tabindex="0">
    <span
      v-for="(item, key) in max"
      :key="key"
      class="wa-rate__item"
      :style="{ cursor: rateDisabled ? 'auto' : 'pointer' }"
      @mousemove="setCurrentValue(item, $event)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      <i
        :class="[classes[item - 1], { hover: hoverIndex === item }]"
        class="wa-rate__icon"
        :style="getIconStyle(item)"
      >
        <i
          v-if="showDecimalIcon(item)"
          :class="decimalIconClass"
          :style="decimalStyle"
          class="wa-rate__decimal"
        >
        </i>
      </i>
    </span>
    <span v-if="showText || showScore" class="wa-rate__text" :style="{ color: textColor }">{{
      text
    }}</span>
  </div>
</template>


<script>
import { defineComponent, inject, computed, ref, watch } from 'vue';

const UPDATE_MODEL_EVENT = 'update:modelValue';
const isObject = (val) => typeof val === 'object';
const isArray = (val) => val instanceof Array;

export default defineComponent({
  name: 'ElRate',
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    lowThreshold: {
      type: Number,
      default: 2,
    },
    highThreshold: {
      type: Number,
      default: 4,
    },
    max: {
      type: Number,
      default: 5,
    },
    colors: {
      type: [Array, Object],
      default: () => ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
    },
    voidColor: {
      type: String,
      default: '#C6D1DE',
    },
    disabledVoidColor: {
      type: String,
      default: '#EFF2F7',
    },
    iconClasses: {
      type: [Array, Object],
      default: () => ['wa-icon-star-on', 'wa-icon-star-on', 'wa-icon-star-on'],
    },
    voidIconClass: {
      type: String,
      default: 'wa-icon-star-off',
    },
    disabledVoidIconClass: {
      type: String,
      default: 'wa-icon-star-on',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    allowHalf: {
      type: Boolean,
      default: false,
    },
    showText: {
      type: Boolean,
      default: false,
    },
    showScore: {
      type: Boolean,
      default: false,
    },
    textColor: {
      type: String,
      default: '#1f2d3d',
    },
    texts: {
      type: Array,
      default: () => ['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise'],
    },
    scoreTemplate: {
      type: String,
      default: '{value}',
    },
  },
  emits: [UPDATE_MODEL_EVENT, 'change'],
  setup(props, { emit }) {
    const currentValue = ref(props.modelValue);
    const rateDisabled = computed(() => props.disabled);
    // export text 评分描述
    const text = computed(() => {
      let result = '';
      if (props.showScore) {
        result = props.scoreTemplate.replace(
          /\{\s*value\s*\}/,
          rateDisabled.value ? `${props.modelValue}` : `${currentValue.value}`,
        );
      } else if (props.showText) {
        result = props.texts[Math.ceil(currentValue.value) - 1];
      }
      return result;
    });
    // get Value From Map
    function getValueFromMap(value, map) {
      // matchedKeys 从map中当前大于value的项
      const matchedKeys = Object.keys(map)
        .filter((key) => {
          return value <= key;
        })
        .sort((a, b) => a - b);
      const matchedValue = map[matchedKeys[0]];
      return isObject(matchedValue) ? matchedValue.value : matchedValue || '';
    }
    // 评分的小数
    const valueDecimal = computed(
      () => props.modelValue * 100 - Math.floor(props.modelValue) * 100,
    );
    // 颜色Map
    const colorMap = computed(() => {
      return isArray(props.colors)
        ? {
            [props.lowThreshold]: props.colors[0],
            [props.highThreshold]: props.colors[1],
            [props.max]: props.colors[2],
          }
        : props.colors;
    });
    // 激活颜色
    const activeColor = computed(() => getValueFromMap(currentValue.value, colorMap.value));

    // 小数样式
    const decimalStyle = computed(() => {
      let width = '';
      if (rateDisabled.value) {
        width = `${valueDecimal.value}%`;
      } else if (props.allowHalf) {
        width = '50%';
      }
      return {
        color: activeColor.value,
        width,
      };
    });

    // 类名map
    const classMap = computed(() => {
      return isArray(props.iconClasses)
        ? {
            [props.lowThreshold]: props.iconClasses[0],
            [props.highThreshold]: props.iconClasses[1],
            [props.max]: props.iconClasses[2],
          }
        : props.iconClasses;
    });
    // 小数类名
    const decimalIconClass = computed(() => getValueFromMap(props.modelValue, classMap.value));
    // void类名
    const voidClass = computed(() =>
      rateDisabled.value ? props.disabledVoidIconClass : props.voidIconClass,
    );
    // 激活类名
    const activeClass = computed(() => getValueFromMap(currentValue.value, classMap.value));

    // 根据threshold的类名集合
    const classes = computed(() => {
      const result = Array(props.max);
      const threshold = currentValue.value;
      result.fill(activeClass.value, 0, threshold);
      result.fill(voidClass.value, threshold, props.max);
      return result;
    });

    // pointerAtLeftHalf：数值是否有小数
    const pointerAtLeftHalf = ref(true);
    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val;
        pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
      },
    );

    // 展示小数图标
    function showDecimalIcon(item) {
      const showWhenDisabled =
        rateDisabled.value &&
        valueDecimal.value > 0 &&
        item - 1 < props.modelValue &&
        item > props.modelValue;
      /* istanbul ignore next */
      const showWhenAllowHalf =
        props.allowHalf &&
        pointerAtLeftHalf.value &&
        item - 0.5 <= currentValue.value &&
        item > currentValue.value;
      return showWhenDisabled || showWhenAllowHalf;
    }

    // 获取icon样式
    function getIconStyle(item) {
      const voidColor = rateDisabled.value ? props.disabledVoidColor : props.voidColor;
      return {
        color: item <= currentValue.value ? activeColor.value : voidColor,
      };
    }

    // 点击星星事件
    function selectValue(value) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf && pointerAtLeftHalf.value) {
        // 允许一半，但是currentValue是小数，需要改
        emit(UPDATE_MODEL_EVENT, currentValue.value);
        if (props.modelValue !== currentValue.value) {
          emit('change', currentValue.value);
        }
      } else {
        emit(UPDATE_MODEL_EVENT, value);
        if (props.modelValue !== value) {
          emit('change', value);
        }
      }
    }

    const hoverIndex = ref(-1);
    function setCurrentValue(value, event) {
      if (rateDisabled.value) {
        return;
      }
      /* istanbul ignore if */
      if (props.allowHalf) {
        let target = event.target;
        if (target.classList.contains('wa-rate__item')) {
          target = target.querySelector('.wa-rate__icon');
        }
        if (target.classList.contains('wa-rate__decimal')) {
          target = target.parentNode;
        }
        pointerAtLeftHalf.value = event.offsetX * 2 <= target.clientWidth;
        currentValue.value = pointerAtLeftHalf.value ? value - 0.5 : value;
      } else {
        currentValue.value = value;
      }
      hoverIndex.value = value;
    }

    function resetCurrentValue(){
      if (rateDisabled.value) {
        return
      }
      if (props.allowHalf) {
        pointerAtLeftHalf.value =
          props.modelValue !== Math.floor(props.modelValue)
      }
      currentValue.value = props.modelValue
      hoverIndex.value = -1
    }

    if (!props.modelValue) {
      emit(UPDATE_MODEL_EVENT, 0);
    }
    return {
      hoverIndex,

      currentValue,
      rateDisabled,
      text,
      decimalStyle,
      decimalIconClass,
      classes,

      showDecimalIcon,
      getIconStyle,
      selectValue,
      setCurrentValue,
      resetCurrentValue
    };
  },
});
</script>


<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

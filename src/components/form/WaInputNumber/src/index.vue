<template>
  <div
    :class="[
      'wa-input-number',
      inputNumberSize ? 'wa-input-number--' + inputNumberSize : '',
      { 'is-disabled': inputNumberDisabled },
      { 'is-without-controls': !controls },
    ]"
    @dragstart.prevent
  >
    <span
      v-if="controls"
      @click="decrease"
      class="wa-input-number__decrease"
      role="button"
      :class="{ 'is-disabled': minDisabled }"
      @keydown.enter="decrease"
    >
      <i class="wa-input-number__icon-minus"></i>
    </span>
    <span
      v-if="controls"
      @click="increase"
      class="wa-input-number__increase"
      role="button"
      :class="{ 'is-disabled': maxDisabled }"
      @keydown.enter="increase"
    >
      <i class="wa-input-number__icon-plus"></i>
    </span>
    <input
      ref="input"
      class="wa-input-number__input"
      v-model="displayValue"
      :placeholder="placeholder"
      :disabled="inputNumberDisabled"
      :max="max"
      :min="min"
      :name="name"
      @keydown.up.prevent="increase"
      @keydown.down.prevent="decrease"
      @blur="(event) => $emit('blur', event)"
      @focus="(event) => $emit('focus', event)"
      @input="handleInput"
      @change="handleInputChange"
    />
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref, watch, inject, onMounted, onUpdated } from 'vue';
export default defineComponent({
  name: 'WaInputNumber',
  props: {
    step: {
      type: Number,
      default: 1,
    },
    stepStrictly: {
      type: Boolean,
      default: false,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    modelValue: {
      type: Number,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
      validator: (val) => ['', 'large', 'medium', 'small', 'mini'].includes(val),
    },
    controls: {
      type: Boolean,
      default: true,
    },
    controlsPosition: {
      type: String,
      default: '',
    },
    name: String,
    placeholder: String,
    precision: {
      type: Number,
      validator: (val) => val >= 0 && val === parseInt(`${val}`, 10),
    },
  },
  emits: ['update:modelValue', 'change', 'input', 'blur', 'focus'],
  setup(props, { emit }) {
    const input = ref(null);
    const data = reactive({
      currentValue: props.modelValue,
      userInput: null,
    });

    const minDisabled = computed(() => {
      return _decrease(props.modelValue) < props.min;
    });
    const maxDisabled = computed(() => {
      return _increase(props.modelValue) > props.max;
    });
    const numPrecision = computed(() => {
      const stepPrecision = getPrecision(props.step);
      if (props.precision !== undefined) {
        if (stepPrecision > props.precision) {
          console.warn(new Error('precision should not be less than the decimal places of step'));
        }
        return props.precision;
      } else {
        return Math.max(getPrecision(props.modelValue), stepPrecision);
      }
    });
    const inputNumberSize = computed(() => props.size);
    const inputNumberDisabled = computed(() => {
      console.log(props);
      return props.disabled;
    });
    const displayValue = computed(() => {
      console.log(data.userInput);
      if (data.userInput !== null) return data.userInput;
      let currentValue = data.currentValue;
      if (typeof currentValue === 'number') {
        if (props.precision !== undefined) {
          currentValue = currentValue.toFixed(props.precision);
        }
      }
      return currentValue;
    });
    const toPrecision = (num, pre) => {
      if (pre === undefined) pre = numPrecision.value;
      return parseFloat(`${Math.round(num * Math.pow(10, pre)) / Math.pow(10, pre)}`);
    };
    const getPrecision = (value) => {
      if (value === undefined) return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf('.');
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    };
    const _increase = (val) => {
      if (typeof val !== 'number' && val !== undefined) return data.currentValue;
      const precisionFactor = Math.pow(10, numPrecision.value);
      // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
      return toPrecision((precisionFactor * val + precisionFactor * props.step) / precisionFactor);
    };
    const _decrease = (val) => {
      if (typeof val !== 'number' && val !== undefined) return data.currentValue;
      const precisionFactor = Math.pow(10, numPrecision.value);
      // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
      return toPrecision((precisionFactor * val - precisionFactor * props.step) / precisionFactor);
    };
    const increase = () => {
      if (inputNumberDisabled.value || maxDisabled.value) return;
      const value = props.modelValue || 0;
      const newVal = _increase(value);
      setCurrentValue(newVal);
    };
    const decrease = () => {
      if (inputNumberDisabled.value || minDisabled.value) return;
      const value = props.modelValue || 0;
      const newVal = _decrease(value);
      setCurrentValue(newVal);
    };

    const setCurrentValue = (newVal) => {
      const oldVal = data.currentValue;
      if (typeof newVal === 'number' && props.precision !== undefined) {
        newVal = toPrecision(newVal, props.precision);
      }
      if (newVal !== undefined && newVal >= props.max) newVal = props.max;
      if (newVal !== undefined && newVal <= props.min) newVal = props.min;
      if (oldVal === newVal) return;
      data.userInput = null;
      emit('update:modelValue', newVal);
      emit('input', newVal);
      emit('change', newVal, oldVal);
      data.currentValue = newVal;
    };
    const handleInput = (event) => {
      return (data.userInput = event.target.value);
    };
    const handleInputChange = (event) => {
      const value = event.target.value;
      const newVal = value === '' ? undefined : Number(value);
      if (!isNaN(newVal) || value === '') {
        setCurrentValue(newVal);
      }
      data.userInput = null;
    };

    const focus = () => {
      input.value.focus?.();
    };

    const blur = () => {
      input.value.blur?.();
    };

    watch(
      () => props.modelValue,
      (value) => {
        let newVal = value === undefined ? value : Number(value);
        if (newVal !== undefined) {
          if (isNaN(newVal)) return;
          if (props.stepStrictly) {
            const stepPrecision = getPrecision(props.step);
            const precisionFactor = Math.pow(10, stepPrecision);
            newVal =
              (Math.round(newVal / props.step) * precisionFactor * props.step) / precisionFactor;
          }
          if (props.precision !== undefined) {
            newVal = toPrecision(newVal, props.precision);
          }
        }
        if (newVal !== undefined && newVal >= props.max) {
          newVal = props.max;
          emit('update:modelValue', newVal);
        }
        if (newVal !== undefined && newVal <= props.min) {
          newVal = props.min;
          emit('update:modelValue', newVal);
        }
        data.currentValue = newVal;
        data.userInput = null;
      },
      { immediate: true },
    );

    return {
      input,
      displayValue,
      handleInput,
      handleInputChange,
      decrease,
      increase,
      inputNumberSize,
      inputNumberDisabled,
      maxDisabled,
      minDisabled,
      focus,
      blur,
    };
  },
});
</script>

<style scoped lang="scss">
</style>

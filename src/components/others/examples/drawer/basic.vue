<template>
  <button
    v-for="direction in directions"
    :key="direction"
    @click="handleOpen(direction)"
    style="margin: 1rem"
  >
    open {{ direction }}
  </button>
  <Wadrawer
    v-model="showDrawers[direction]"
    :direction="direction"
    bodyWidth="30%"
    v-for="direction in directions"
    :key="direction"
  >
    <div style="padding: 1em">Hi there!</div>
  </Wadrawer>
</template>

<script>
import Wadrawer from '@/components/feedback/WaDrawer';
export default {
  components: { Wadrawer },
  data() {
    return {
      directions: ['ltr', 'rtl', 'ttb', 'btt'],
      showDrawers: { rtl: false, ltr: false, ttb: false, btt: false },
    };
  },
  methods: {
    handleOpen(direction) {
      this.showDrawers[direction] = true;
    },
  },
};
</script>

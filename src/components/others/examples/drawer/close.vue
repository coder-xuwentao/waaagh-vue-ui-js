<template>
  <button @click="showDrawer = true" style="margin: 1rem">open</button>
  <Wadrawer v-model="showDrawer" bodyWidth="300px">
    <div style="padding: 1em">
      Hi there!
      <button @click="showDrawer = false">close</button>
    </div>
  </Wadrawer>
</template>

<script>
import Wadrawer from '@/components/feedback/WaDrawer';
export default {
  components: { Wadrawer },
  data() {
    return {
      showDrawer: false,
    };
  },
  methods: {
  },
};
</script>


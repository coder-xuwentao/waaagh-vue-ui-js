<template>
  <div class="collapse-eg">
    <WaCollapse v-model="activeNames" @change="handleChange">
      <WaCollapseItem
        v-for="(item, index) in collapseData"
        :key="index"
        :title="item.title"
        :name="item.id"
      >
        <div>
          {{ item.content }}
        </div>
      </WaCollapseItem>
    </WaCollapse>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import WaCollapse from '@/components/data/WaCollapse';
import WaCollapseItem from '@/components/data/WaCollapse/WaCollapseItem';

export default defineComponent({
  components: { WaCollapse, WaCollapseItem },
  setup() {
    const collapseData = [
      {
        id: 1,
        title: 'Consistency',
        content:
          'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;',
      },
      {
        id: 2,
        title: 'Feedback',
        content:
          'Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;',
      },
      {
        id: 3,
        title: 'Efficiency',
        content:
          'Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;',
      },
      {
        id: 4,
        title: 'Controllability',
        content:
          'Decision making: giving advices about operations is acceptable, but do not make decisions for the users;Decision making: giving advices about operations is acceptable, but do not make decisions for the users;',
      },
    ];
    const activeNames = ref([1]);
    const handleChange = (val) => {
      console.log(val);
    };
    return {
      activeNames,
      handleChange,
      collapseData,
    };
  },
});
</script>

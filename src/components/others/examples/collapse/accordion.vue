<template>
  <div class="demo-collapse">
    <WaCollapse v-model="activeName" accordion>
      <WaCollapseItem title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply
          with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such as: design style,
          icons and texts, position of elements, etc.
        </div>
      </WaCollapseItem>
      <WaCollapseItem title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their operations by style updates
          and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging elements of the page.
        </div>
      </WaCollapseItem>
      <WaCollapseItem title="Efficiency" name="3">
        <div>Simplify the process: keep operating process simple and intuitive;</div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the users can quickly
          understand and make decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps the users to
          identify and frees them from memorizing and recalling.
        </div>
      </WaCollapseItem>
      <WaCollapseItem title="disabledCollapseItem" name="4" disabled>
        <div>
          Decision making: giving advices about operations is acceptable, but do not make decisions
          for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to operate, including
          canceling, aborting or terminating current operation.
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
    const activeName = ref('1');

    return {
      activeName,
    };
  },
});
</script>

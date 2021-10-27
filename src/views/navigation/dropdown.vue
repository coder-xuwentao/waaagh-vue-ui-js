<template>
  <div class="wa-snippet-example">
    <h3 class="wa-snippet-title">Basic Use</h3>
    <div class="wa-snippet-item">
      <WaDropDown @click="toggleDropdown">
        <template #button>
          <span>Dropdown button</span>
          <i :class="{ 'dropdown-icon-chevron-down': true, 'is-active': showDropdown }"></i>
        </template>
        <template #default>
          <WaDropDownItem>Dropdown item 1</WaDropDownItem>
          <WaDropDownItem>Dropdown item 2</WaDropDownItem>
          <WaDropDownItem isActive>Active item 3</WaDropDownItem>
          <WaDropDownItem disabled>Disabled item 4</WaDropDownItem>
        </template>
      </WaDropDown>
      <span style="padding-left: 1em">{{ showDropdown ? 'showing' : 'hidden' }}</span>
    </div>
    <h3 class="wa-snippet-title">is Right</h3>
    <div class="wa-snippet-item">
      <WaDropDown isRight>
        <template #button>Right Dropdown</template>
        <template #default>
          <WaDropDownItem v-for="i in 5" :key="i">Dropdown item {{ i }}</WaDropDownItem>
        </template>
      </WaDropDown>
    </div>
    <h3 class="wa-snippet-title">is Up</h3>
    <div class="wa-snippet-item">
      <WaDropDown isUp>
        <template #button>Up Dropdown</template>
        <template #default>
          <WaDropDownItem v-for="i in 5" :key="i">Dropdown item {{ i }} </WaDropDownItem>
        </template>
      </WaDropDown>
    </div>
  </div>
</template>

<script>
import WaDropDown from '@/components/navigation/WaDropDown.vue';
import WaDropDownItem from '@/components/navigation/WaDropDownItem.vue';
export default {
  components: { WaDropDown, WaDropDownItem },
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown(bool) {
      console.log(bool);
      this.showDropdown = bool;
    },
  },
};
</script>

<style scoped lang="scss">
.wa-snippet-example {
  margin: 0 auto;
  max-width: 600px;
}
.wa-snippet-title {
  margin-top: 1rem;
  font-weight: bold;
}
.wa-snippet-item {
  padding: 1rem 0;
}

// icon
.dropdown-icon-chevron-down {
  margin-left: 0.125em;
  transition: transform 0.2s ease;

  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 100px;
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    left: 4px;
    top: 2px;
  }
  &.is-active {
    transform: rotate(-180deg);
  }
}
</style>

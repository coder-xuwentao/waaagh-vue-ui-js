<template>
  <div class="wa-snippet-example">
    <div style="text-align: center">
      <strong>Active:</strong>
      <i style="color: red; padding-left: 1em">{{ activeItem }}</i>
    </div>

    <h3 class="wa-snippet-title">default</h3>
    <div class="wa-snippet-item">
      <WaTab>
        <WaTabItem
          v-for="(item, index) in items"
          :key="index"
          :isActive="activeItem === item"
          @click="handleTabclick(item)"
        >
          {{ item }}
        </WaTabItem>
      </WaTab>
    </div>

    <h3 class="wa-snippet-title">isBoxed</h3>
    <div class="wa-snippet-item">
      <WaTab isBoxed>
        <WaTabItem
          v-for="(item, index) in items"
          :key="index"
          :isActive="activeItem === item"
          @click="handleTabclick(item)"
        >
          {{ item }}
        </WaTabItem>
      </WaTab>
    </div>

    <h3 class="wa-snippet-title">isFullwidth</h3>
    <div class="wa-snippet-item">
      <WaTab isFullwidth>
        <WaTabItem
          v-for="(item, index) in items"
          :key="index"
          :isActive="activeItem === item"
          @click="handleTabclick(item)"
        >
          {{ item }}
        </WaTabItem>
      </WaTab>
    </div>

    <h3 class="wa-snippet-title">isToggle</h3>
    <div class="wa-snippet-item">
      <WaTab isToggle>
        <WaTabItem
          v-for="(item, index) in items"
          :key="index"
          :isActive="activeItem === item"
          @click="handleTabclick(item)"
        >
          {{ item }}
        </WaTabItem>
      </WaTab>
    </div>

    <h3 class="wa-snippet-title">isToggleRounded</h3>
    <div class="wa-snippet-item">
      <WaTab isToggleRounded>
        <WaTabItem
          v-for="(item, index) in items"
          :key="index"
          :isActive="activeItem === item"
          @click="handleTabclick(item)"
        >
          {{ item }}
        </WaTabItem>
      </WaTab>
    </div>

    <!-- slot -->
    <h3 class="wa-snippet-title">Slot</h3>
    <div class="wa-snippet-item">
      <WaTab>
        <WaTabItem
          v-for="(item, index) in itemsWithIcon"
          :key="index"
          :isActive="activeItem === item.name"
          @click="handleTabclick(item.name)"
        >
          <div style="white-space: nowrap; display: flex; align-items: center; height: 2em">
            <i :class="item.icon"></i>
            <span style="padding-left: 0.5em">{{ item.name }}</span>
          </div>
        </WaTabItem>
      </WaTab>
    </div>

    <h3 class="wa-snippet-title">Position</h3>
    <div class="wa-snippet-item">
      <WaTab>
        <WaTabItem
          v-for="(item, index) in items"
          :key="index"
          :isActive="activeItem === item"
          @click="handleTabclick(item)"
        >
          {{ item }}
        </WaTabItem>
      </WaTab>
    </div>
    <div class="wa-snippet-item">
      <WaTab position="center">
        <WaTabItem
          v-for="(item, index) in items"
          :key="index"
          :isActive="activeItem === item"
          @click="handleTabclick(item)"
        >
          {{ item }}
        </WaTabItem>
      </WaTab>
    </div>
    <div class="wa-snippet-item">
      <WaTab position="right">
        <WaTabItem
          v-for="(item, index) in items"
          :key="index"
          :isActive="activeItem === item"
          @click="handleTabclick(item)"
        >
          {{ item }}
        </WaTabItem>
      </WaTab>
    </div>

    <h3 class="wa-snippet-title">Size</h3>
    <div class="wa-snippet-item">
      <WaTab size="small">
        <WaTabItem
          v-for="(item, index) in items"
          :key="index"
          :isActive="activeItem === item"
          @click="handleTabclick(item)"
        >
          {{ item }}
        </WaTabItem>
      </WaTab>
    </div>
    <div class="wa-snippet-item">
      <WaTab size="medium">
        <WaTabItem
          v-for="(item, index) in items"
          :key="index"
          :isActive="activeItem === item"
          @click="handleTabclick(item)"
        >
          {{ item }}
        </WaTabItem>
      </WaTab>
    </div>
    <div class="wa-snippet-item">
      <WaTab size="large">
        <WaTabItem
          v-for="(item, index) in items"
          :key="index"
          :isActive="activeItem === item"
          @click="handleTabclick(item)"
        >
          {{ item }}
        </WaTabItem>
      </WaTab>
    </div>
  </div>
</template>

<script>
import WaTab from '@/components/navigation/WaTab';
import WaTabItem from '@/components/navigation/WaTabItem';
export default {
  components: {
    WaTab,
    WaTabItem,
  },
  data() {
    return {
      items: ['Picture', 'Music', 'Videos', 'Documents'],
      itemsWithIcon: [
        { name: 'Picture', icon: 'gg-image' },
        { name: 'Music', icon: 'gg-music' },
        { name: 'Videos', icon: 'gg-laptop' },
        { name: 'Documents', icon: 'gg-file-document' },
      ],
      activeItem: 'Picture',
    };
  },
  methods: {
    handleTabclick(item) {
      this.activeItem = item;
      console.log(item);
    },
  },
};
</script>
<style lang="scss" scoped>
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
</style>

<style lang="scss" scoped>
// some css icons from https://css.gg/
// music
.gg-music,
.gg-music::after,
.gg-music::before {
  display: block;
  box-sizing: border-box;
  border: 2px solid;
}

.gg-music {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 0;
  margin-top: -4px;
  position: relative;
  transform: skewY(-15deg) scale(var(--ggs, 1));
  width: 14px;
  height: 16px;
}

.gg-music::after,
.gg-music::before {
  content: '';
  position: absolute;
  width: 7px;
  height: 7px;
  top: 9px;
  left: -7px;
  transform: skewY(15deg);
  border-radius: 10px;
}

.gg-music::after {
  left: 5px;
}
.gg-laptop {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 18px;
  height: 12px;
  border: 2px solid;
  border-radius: 2px;
}

.gg-laptop::after {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 22px;
  height: 2px;
  background: currentColor;
  left: -4px;
  bottom: -5px;
  border-radius: 100px;
}
.gg-file-document {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 14px;
  height: 16px;
  border: 2px solid transparent;
  border-right: 0;
  border-top: 0;
  box-shadow: 0 0 0 2px;
  border-radius: 1px;
  border-top-right-radius: 4px;
  overflow: hidden;
}

.gg-file-document::after,
.gg-file-document::before {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
}

.gg-file-document::before {
  background: currentColor;
  box-shadow: 0 4px 0, -6px -4px 0;
  left: 0;
  width: 10px;
  height: 2px;
  top: 8px;
}

.gg-file-document::after {
  width: 6px;
  height: 6px;
  border-left: 2px solid;
  border-bottom: 2px solid;
  right: -1px;
  top: -1px;
}
.gg-image {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 20px;
  height: 16px;
  overflow: hidden;
  box-shadow: 0 0 0 2px;
  border-radius: 2px;
}

.gg-image::after,
.gg-image::before {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  border: 2px solid;
}

.gg-image::after {
  transform: rotate(45deg);
  border-radius: 3px;
  width: 16px;
  height: 16px;
  top: 9px;
  left: 6px;
}

.gg-image::before {
  width: 6px;
  height: 6px;
  border-radius: 100%;
  top: 2px;
  left: 2px;
}
</style>

<template>
  <CoHeader @menuClick="handleClickMenu" />
  <section class="docs">
    <aside :class="{ docs__aside: true, 'is-show': showAside }" id="docsAside">
      <CoAside :categories="categories" />
    </aside>
    <main class="docs__main">
      <router-view />
    </main>
  </section>
</template>

<script>
import CoAside from '@/components/others/CoAside.vue';
import CoHeader from '@/components/others/CoHeader.vue';
export default {
  components: { CoAside, CoHeader },
  data() {
    return {
      categories: [],
      showAside: false,
    };
  },
  methods: {
    handleClickMenu() {
      this.showAside = !this.showAside;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_init.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.docs {
  display: flex;
  &__aside {
    overflow: hidden;
    @include mobile {
      flex-basis: 0;
      &.is-show {
        position: absolute;
        flex-basis: inherit;
        background-color: #fff;
        z-index: 9999;
      }
    }
  }
  &__main {
    padding: 1rem;
    flex-grow: 1;
    // flex-shrink: 0;
    overflow: hidden;
  }
}
</style>

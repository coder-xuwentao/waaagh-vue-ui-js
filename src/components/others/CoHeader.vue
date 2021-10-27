<template>
  <header id="headerNavbar" class="co-navbar">
    <router-link to="/" class="co-navbar__brand">Waaagh UI</router-link>
    <div class="wa-menu" @click="showNav">
      <i class="icon-menu"></i>
    </div>
    <a href="https://github.com/shakexu1" class="co-navbar__github">
      <img src="@/assets/github-fill.png" alt="" />
    </a>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['menuClick'],
  setup(props, ctx) {
    const showNav = () => {
      ctx.emit('menuClick');
    };
    return {
      showNav,
    };
  },
});
</script>



<style lang='scss'>
@import '@/assets/scss/_init.scss';
.co-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-bottom: 2px solid #f5f5f5;

  &__brand {
    font-size: 2.5rem;
    font-weight: bold;
    // color: $primary;
    text-decoration: none;
    background-image: linear-gradient(to right, hsl(171, 100%, 40%), hsl(171, 100%, 65%));
    background-clip: text;
    color: transparent;
    font-size: 30px;
  }
  &__github {
    display: block;
    width: 2rem;
    height: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.wa-menu {
  cursor: pointer;
  margin-left: auto;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  @include mobile-invert {
    display: none;
  }
}

.icon-menu {
  transform: scale(var(--ggs, 1));
}

.icon-menu,
.icon-menu::after,
.icon-menu::before {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 3px;
  background: currentColor;
}

.icon-menu::after,
.icon-menu::before {
  content: '';
  position: absolute;
  top: -6px;
}

.icon-menu::after {
  top: 6px;
}
</style>

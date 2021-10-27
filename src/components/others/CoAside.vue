<template>
  <nav class="cp-categories">
    <div class="cp-count">{{ `--- finished: ${componentLength} ---` }}</div>

    <div class="cp-category" v-for="item in categories_" :key="item.headerTitle">
      <header class="cp-category__header">
        <strong>{{ upperFirstLetter(item.headerTitle) }}</strong>
      </header>
      <ul class="cp-category__list">
        <li v-for="subItem in item.list" :key="subItem">
          <router-link :to="toUrl(item.headerTitle, subItem)">{{
            upperFirstLetter(subItem)
          }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { cloneDeep } from 'lodash';
export default {
  props: {
    categories: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      categories_: [],
      componentLength: 0,
    };
  },
  methods: {
    upperFirstLetter(str) {
      const strs = str.split('-');
      const upperStr = strs
        .map((val) => {
          return val.substring(0, 1).toUpperCase() + val.substring(1);
        })
        .join(' ');
      return upperStr;
    },
    toUrl(headerTitle, category) {
      return '/' + headerTitle.toLowerCase() + '/' + category.toLowerCase();
    },
    // dynamic get categories from views
    getCategories() {
      const modules = require.context('@/views', true, /\/.+\/.+vue/);
      console.log(modules);
      this.componentLength = modules.keys().length;

      let category = { headerTitle: '', list: [] };
      const categories = [];
      modules.keys().forEach((item) => {
        const locations = item.slice(2).split('/'); // ['form', 'rate.vue']
        if (category.headerTitle !== locations[0]) {
          if (category.headerTitle) {
            categories.push(cloneDeep(category));
          }
          category.headerTitle = locations[0];
          category.list = [];
        }
        category.list.push(locations[1].replace('.vue', ''));
      });
      categories.push(category);
      return categories;
    },
  },
  mounted() {
    this.categories_ = this.categories.length ? this.categories : this.getCategories();
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_init.scss';
.cp-categories {
  background-color: #fafafa;
  width: 11.25rem;
}
.cp-count {
  padding: 0.35rem 0;
  font-size: 1rem;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
}
.cp-category {
  &__header {
    padding: 0.35rem 1.5rem;
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
  }
  &__list {
    padding: 0.25em 0.75em 0.75em;
    li {
      cursor: pointer;
    }
    li:hover {
      background-color: $primary;
      color: #fff;
    }
    a {
      display: inline-block;
      padding: 0.375em 1.5em;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
  }
}
</style>

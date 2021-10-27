<template>
  <div class="tag-eg">
    <WaTag>default</WaTag>
    <WaTag closable>closable</WaTag>
    <br />
    <WaTag class="tag is-primary is-dark">Primary</WaTag>
    <WaTag class="tag is-link is-dark">Link</WaTag>
    <WaTag class="tag is-info is-dark">Info</WaTag>
    <WaTag class="tag is-success is-dark">Success</WaTag>
    <WaTag class="tag is-warning is-dark">Warning</WaTag>
    <WaTag class="tag is-danger is-dark">Danger</WaTag>
    <br />
    <WaTag class="tag is-primary is-light">Primary</WaTag>
    <WaTag class="tag is-link is-light">Link</WaTag>
    <WaTag class="tag is-info is-light">Info</WaTag>
    <WaTag class="tag is-success is-light">Success</WaTag>
    <WaTag class="tag is-warning is-light">Warning</WaTag>
    <WaTag class="tag is-danger is-light">Danger</WaTag>
    <br />
    <WaTag class="tag is-primary is-plain">Primary</WaTag>
    <WaTag class="tag is-link is-plain">Link</WaTag>
    <WaTag class="tag is-info is-plain">Info</WaTag>
    <WaTag class="tag is-success is-plain">Success</WaTag>
    <WaTag class="tag is-warning is-plain">Warning</WaTag>
    <WaTag class="tag is-danger is-plain">Danger</WaTag>
    <br />
    <br />
    <!-- Dynamic Tags -->
    <div class="dynamic-tags">
      <h2>
        <strong>Dynamic Tags</strong>
      </h2>
      <br />
      <WaTag
        closable
        @close="handleClose(tag)"
        :disable-transitions="true"
        class="dynamic-tag is-success is-light"
        v-for="tag in dynamicTags"
        :key="tag"
      >
        <template #close>
          <WaDelete class="is-success"></WaDelete>
        </template>
        <template #default>
          {{tag}}
        </template>
      </WaTag>
      <input
        v-if="inputVisible"
        ref="saveTagInput"
        v-model="inputValue"
        class="input-new-tag"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
      />
      <WaButton v-else class="button-new-tag is-small" @click="showInput">+ New Tag</WaButton>
    </div>
  </div>
</template>

<script>
import WaTag from '@/components/data/WaTag';
import WaButton from '@/components/basic/WaButton';
import WaDelete from '@/components/basic/WaDelete';
export default {
  components: { WaTag, WaButton, WaDelete },
  data() {
    return {
      dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
      inputVisible: false,
      inputValue: '',
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.focus();
      });
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
  },
};
</script>

<style lang="scss" scoped>

.tag-eg{
  max-width: 600px;
  margin: 0 auto;
}

.tag-eg > * {
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.dynamic-tag + .dynamic-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 100px;
  height: 2rem;
  margin-left: 10px;
  vertical-align: bottom;
  outline: none;
  &:focus {
  }
}
</style>

<template>
  <div class="wa-snippet-example">
    <div class="wa-snippet-title">All in dialog is costom</div>
    <div class="wa-snippet-item">
      <button @click="showDialog = true">showDialog</button>
      <WaDialog v-model="showDialog">
        <div class="example">
          <div class="example__header">
            <span class="example__title">Tips</span>
            <WaDelete class="example__delete" @click="handleClose"></WaDelete>
          </div>
          <div class="example__body">This is a message</div>
          <div class="example__footer">
            <WaButton class="btn" @click="handleClose">cancel</WaButton>
            <WaButton class="btn is-primary" @click="handleClose">confirm</WaButton>
          </div>
        </div>
      </WaDialog>
    </div>
  </div>
</template>

<script>
import WaDialog from '@/components/feedback/WaDialog';
import WaDelete from '@/components/basic/WaDelete';
import WaButton from '@/components/basic/WaButton';
export default {
  components: { WaDialog, WaDelete, WaButton },
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    handleClose() {
      this.showDialog = false;
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

$tablet: 769px !default;

@mixin mini-mobile {
  @media screen and (max-width: 380px - 1px) {
    @content;
  }
}

.example {
  padding: 1.5rem;
  width: 380px;
  overflow: hidden;

  @include mini-mobile {
    $margin:1rem;
    width: calc(100vw - $margin);
  }
  &__header {
    padding-bottom: 1rem;
    .example__delete {
      float: right;
    }
  }
  &__body {
    min-height: 7rem;
    color: hsl(0, 0, 40%);
  }
  &__footer {
    text-align: right;
    .btn + .btn {
      margin-left: 0.5em;
    }
  }
}
</style>

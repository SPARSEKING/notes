<template>
  <transition name="modal">
    <div class="modal__wrapper" @click="$emit('close')">
      <div class="modal-content" @click.stop="">
        <div class="modal-header">
          <span class="modal-title">{{ title }}</span>
          <span class="button-close" @click="$emit('close')">x</span>
        </div>
        <div class="modal-body">
          <slot name="body"> Default body</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    document.body.addEventListener("keyup", e => {
      if (e.keyCode === 27) this.$emit("close");
    });
  }
});
</script>

<style scoped>
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2);
}

.modal__wrapper {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity 0.3s ease;
  z-index: 998;
  background-color: rgba(00, 00, 00, 0.4);
}

.modal-content {
  position: relative;
  max-width: 600px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all 0.3s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
}

.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
}

.modal-header span {
  font-size: 24px;
}

.button-close {
  cursor: pointer;
}

.modal-body {
  text-align: center;
}
</style>

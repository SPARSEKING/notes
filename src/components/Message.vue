<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "Message",
  computed: {
    ...mapGetters(["message"])
  }
});
</script>

<style scoped>
.message {
  text-align: center;
  padding: 20px;
}
p {
  color: red;
}
</style>

<template>
  <div class="new-note">
    <input type="text" v-model="title" />
    <textarea v-model="description"></textarea>
    <button @click="addNote" class="button-new-note">NEW NOTE</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewNote",
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    addNote(): void {
      this.$emit("addNote", this.title, this.description);
      this.title = "";
      this.description = "";
    }
  }
});
</script>

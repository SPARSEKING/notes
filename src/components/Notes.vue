<template>
  <div class="notes">
    <div
      class="note"
      :class="{ full: !grid }"
      v-for="(note, index) in notes"
      :key="index"
    >
      <div class="note-header">
        <p>{{ note.title }}</p>
        <div>
          <button style="cursor: pointer;" @click="showEdit(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="24px"
              height="24px"
            >
              <path
                d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"
              />
            </svg>
          </button>
          <button style="cursor: pointer;" @click="removeNote(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="24px"
              height="24px"
            >
              <path
                d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"
              />
            </svg>
          </button>
        </div>
        <!-- <p style="cursor: pointer;" @click="removeNote(index)">x</p> -->
      </div>
      <div class="note-body">
        <p class="descr">{{ note.description }}</p>
        <span class="date">{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Note } from "@/Note";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "Notes",
  props: {
    notes: {
      type: Array as PropType<Note[]>,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    ...mapMutations(["showEdit"]),
    removeNote(index: number): void {
      this.$emit("remove", index);
    }
  }
});
</script>

<style scoped>
button {
  background-color: #d8e0ed;
}
</style>

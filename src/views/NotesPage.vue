<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <message v-if="message" />
          <new-note :note="note" @addNote="addNote" />
          <div class="note-head">
            <h1 class="container-title">{{ title }}</h1>
            <search
              :value="search"
              placeholder="Find your note"
              @search="search = $event"
            />
            <div class="icons">
              <svg
                :class="{ active: grid }"
                @click="grid = true"
                style="cursor: pointer;"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <svg
                :class="{ active: !grid }"
                @click="grid = false"
                style="cursor: pointer;"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3" y2="6"></line>
                <line x1="3" y1="12" x2="3" y2="12"></line>
                <line x1="3" y1="18" x2="3" y2="18"></line>
              </svg>
            </div>
          </div>
          <notes :notes="notesFilter" :grid="grid" @remove="removeNote" />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations } from "vuex";
import { defineComponent } from "vue";
import message from "@/components/Message.vue";
import newNote from "@/components/NewNote.vue";
import notes from "@/components/Notes.vue";
import search from "@/components/Search.vue";
import { NotesApp } from "@/NotesApp";

export default defineComponent({
  name: "NotesPage",
  components: {
    message,
    newNote,
    notes,
    search
  },
  data() {
    return {
      title: "Notes App",
      grid: true,
      search: ""
    } as NotesApp;
  },
  computed: {
    ...mapGetters(["notesFilter", "message"])
  },
  methods: {
    ...mapMutations(["removeNote", "addNote"])
  }
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <message v-if="message" :message="message" />
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
import { defineComponent } from "vue";
import message from "@/components/Message.vue";
import newNote from "@/components/NewNote.vue";
import notes from "@/components/Notes.vue";
import search from "@/components/Search.vue";
import { Note } from "@/Note";
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
      message: null,
      grid: true,
      search: "",
      note: {
        title: "",
        description: ""
      },
      notes: [
        {
          title: "Vue",
          description: "Vue is very nice framework!",
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: "Angular",
          description: "Angular is a not bad framework",
          date: new Date(Date.now()).toLocaleString()
        }
      ]
    } as NotesApp;
  },
  computed: {
    notesFilter() {
      let array: Note[] = this.notes,
        search = this.search;
      if (!search) return array;
      // Small
      search = search.trim().toLowerCase();
      // Filter
      array = array.filter(function(item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });
      // Error
      return array;
    }
  },
  methods: {
    addNote(title: string, description: string) {
      if (title === "") {
        this.message = "Title can`t be blank!";
        return false;
      }
      this.notes.push({
        title,
        description,
        date: new Date(Date.now()).toLocaleString()
      });
      this.message = null;
    },
    removeNote(index: number): void {
      this.notes.splice(index, 1);
    }
  }
});
</script>

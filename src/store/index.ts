import { createStore } from "vuex";
import notes from "./modules/notes";
import note from "./modules/note";
import { NotesApp } from "@/NotesApp";

export default createStore({
  state: {
    title: "Notes App"
  } as NotesApp,
  mutations: {},
  actions: {},
  modules: {
    notes,
    note
  },
  getters: {
    printLogo(state: NotesApp) {
      return state.title;
    }
  }
});

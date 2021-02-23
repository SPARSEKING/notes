import { NotesApp } from "@/NotesApp";
export default {
  state: {
    note: {
      title: "",
      description: ""
    }
  },
  mutations: {},
  actions: {},
  getters: {
    newNote(state: NotesApp) {
      return state.note;
    }
  }
};

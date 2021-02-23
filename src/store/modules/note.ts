import { NotesApp } from "@/NotesApp";
import { Module } from 'vuex'

const note: Module<any, any> ={
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

export default note;

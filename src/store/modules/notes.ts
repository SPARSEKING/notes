import { Notes } from "@/Notes";
import { Module } from 'vuex';

const notes: Module<any, any> = {
  state: {
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
    ],
    message: null,
    search: "",
    edit: false,
    indexNote: null
  },
  mutations: {
    addNote(state: Notes, newNote: {title: string, description: string}) {
      const { title, description} = newNote;
      if (title === "") {
        state.message = "Title can`t be blank!";
        return;
      }
      state.notes?.push({
        title,
        description,
        date: new Date(Date.now()).toLocaleString()
      });
      state.message = null;
    },
    removeNote(state: Notes, newIndex: number){
      state.notes.splice(newIndex, 1);
    },
    showEdit(state: Notes, editIndex: number) {
      state.indexNote = editIndex;
      state.edit = !state.edit;
    },
    close(state: Notes) {
      state.edit = !state.edit;
    }
  },
  actions: {
    acceptNote(context: any, {title, description}) {
      const newNote = {
        title,
        description
      }
      context.commit("addNote", newNote);
    },
    getIndex(context: any, index: number) {
        const newIndex = index;
        context.commit("removeNote", newIndex);
    },
    getIndexEditNote(context: any, index: number) {
      const editIndex = index;
      context.commit("showNote", editIndex);
    }
  },
  getters: {
    printNotes(state: Notes) {
      return state.notes;
    },
    notesFilter(state: Notes) {
      let array = state.notes,
        search = state.search;
      if (!search) return array;
      search = search.trim().toLowerCase();
      array = array.filter(function(item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });
      return array;
    },
    message(state: Notes) {
      return state.message;
    },
    notes(state: Notes) {
      return state.notes
    },
    edit(state: Notes){
      return state.edit;
    },
    indexNote(state: Notes) {
      return state.indexNote;
    }
  }
};

export default notes;

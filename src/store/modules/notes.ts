import { Notes } from "@/Notes";
import { NotesApp } from "@/NotesApp";
export default {
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
    search: ""
  },
  mutations: {
    addNote(state: Notes, newNote: {title: string, description: string}) {
      const { title, description} = newNote;
      if (title === "") {
        state.message = "Title can`t be blank!";
        return false;
      }
      state.notes?.push({
        title,
        description,
        date: new Date(Date.now()).toLocaleString()
      });
      state.message = null;
    },
    notesFilter(state: Notes) {
      let array = state.notes,
        search = state.search;
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
    },
    removeNote(state: Notes, newIndex: number){
      state.notes.splice(newIndex, 1);
    }
  },
  actions: {
    acceptNote(context: any, title: string, description: string) {
      const newNote = {
        title,
        description
      }

      context.commit("addNote", newNote);
    },
    getIndex(context: any, index: number){
      const newIndex = index;
      context.commit("removeNote", newIndex);
    }
  },
  getters: {
    printNotes(state: Notes) {
      return state.notes;
    }
  }
};

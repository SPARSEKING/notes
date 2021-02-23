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
    message: null
  },
  mutations: {
    addNote(state: NotesApp, newNote: {title: string, description: string}) {
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
    }
  },
  actions: {
    acceptNote(context: any, title: string, description: string) {
      const newNote = {
        title,
        description
      }

      context.commit("addNote", newNote);
    }
  },
  getters: {
    printNotes(state: Notes) {
      return state.notes;
    }
  }
};

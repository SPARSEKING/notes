import { createStore } from "vuex";
import notes from "./modules/notes";
import note from "./modules/note";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    notes,
    note
  }
});

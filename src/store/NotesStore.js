import { defineStore } from "pinia";

export const useNoteStore = defineStore({
  id: "note",
  state: () => ({
    notes: JSON.parse(localStorage.getItem("notes")) || [],
  }),
  actions: {
    persistToLocalStorage() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },

    createNote(title) {
      this.notes.push({ id: Date.now(), title });
      this.persistToLocalStorage();
    },

    deleteNote(note) {
      this.notes = this.notes.filter((t) => t.id !== note.id);
      this.persistToLocalStorage();
    },
  },
});

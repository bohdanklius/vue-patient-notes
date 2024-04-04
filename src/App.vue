<template>
  <div class="notes-app">
    <note-list></note-list>
    <add-note></add-note>
  </div>
</template>

<script>
import NoteList from "./components/NoteList.vue";
import AddNote from "./components/AddNote.vue";

export default {
  components: {
    NoteList,
    AddNote,
  },
};
</script>

<style scoped>
.notes-app {
  max-width: 1280px;
  margin: 0 auto;
}
</style>

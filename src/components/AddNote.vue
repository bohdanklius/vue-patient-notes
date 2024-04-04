<template>
  <div class="add-note">
    <h2>Add new note</h2>
    <form class="form" @submit.prevent="addNote">
      <!-- <el-input
        class="note-input"
        autosize
        type="textarea"
        v-model="newNote"
        placeholder="Enter patient note here..."
        required
      /> -->
      <textarea
        class="note-input"
        v-model="newNote"
        placeholder="Enter patient note here..."
        required
        name=""
        id=""
      ></textarea>
      <el-button class="submit-button" type="primary" @click="addNote"
        >Save Note</el-button
      >
    </form>
  </div>
</template>

<script setup>
import { useNoteStore } from "../store/NotesStore";
import { ref } from "vue";
const noteStore = useNoteStore();
const newNote = ref("");
const addNote = () => {
  if (newNote.value.trim() !== "") {
    noteStore.createNote(newNote.value);
    newNote.value = "";
  }
};
</script>

<style>
.add-note {
  max-width: 860px;
  margin: 0 auto;
  /* padding: 0 20px; */
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.note-input {
  width: 100%;
  min-height: 150px;
  padding: 20px;
  font: inherit;
  border: 1px solid #e4e7ed;
  border-radius: 5px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}

.submit-button {
  width: max-content;
}
</style>

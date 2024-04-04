<template>
  <div class="notes-list">
    <ul class="list">
      <h2>Patient Notes ({{ notes.length }})</h2>
      <li v-for="(note, index) in notes" :key="index" class="notes">
        <el-card>
          <template #header>
            <el-container class="card-header">
              <el-avatar :size="30" :src="circleUrl" />
              <span>Patient name</span>
            </el-container>
          </template>
          <span>{{ note.title }}</span>
          <template class="delete">
            <el-button
              class="delete"
              @click="deleteNote(note)"
              type="default"
              :icon="Delete"
              circle
            />
          </template>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useNoteStore } from "../store/NotesStore";
import { computed, reactive, toRefs } from "vue";
import { Delete } from "@element-plus/icons-vue";
const noteStore = useNoteStore();
const notes = computed(() => noteStore.notes);
const isDone = (note) => noteStore.isDone(note);
const deleteNote = (note) => noteStore.deleteNote(note);

const state = reactive({
  circleUrl:
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
});

const { circleUrl } = toRefs(state);
</script>

<style scoped>
.notes-list {
  max-width: 900px;
  margin: 0 auto;

}

.list {
  padding: 0;
}

.notes {
  list-style: none;
  padding: 0;
  margin: 0 auto 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.card-header {
  align-items: center;
  gap: 10px;
}

.delete {
  display: flex;
  justify-content: end;
}
</style>

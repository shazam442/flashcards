<!-- template -->
<template>
  <RouterLink to="/create">
    <div style="position: absolute; top: 1rem; right: 1rem">
      <button style="margin-left: auto">Create Flashcard</button>
    </div>
  </RouterLink>

  <!-- Show Flashcards -->
  <div v-if="flashcards.length === 0">
    <p>Loading...</p>
  </div>
  <div v-else>
    <div v-for="flashcard in flashcards" :key="flashcard.id">
      <Flashcard :flashcard="flashcard" :deleteFlashcard="deleteFlashcard" />
    </div>
  </div>
</template>

<!----------------------- script ----------------------->
<script setup>
import { ref, onMounted } from "vue";
import Flashcard from "./FlashcardShow.vue";

const API_FLASHCARDS_ENDPOINT = "http://localhost:3000/flashcards";

const flashcards = ref([]);

const getFlashcards = async () => {
  const response = await fetch(API_FLASHCARDS_ENDPOINT);
  const data = await response.json();
  return data;
};

onMounted(async () => {
  console.log("onMounted called");
  flashcards.value = await getFlashcards();
});

const updateFlashcard = async () => {
  return true;
};

const deleteFlashcard = async (id) => {
  const response = await fetch(`${API_FLASHCARDS_ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  flashcards.value = flashcards.value.filter(
    (flashcard) => flashcard.id !== id,
  );
};

const cancelEditMode = async () => {
  return true;
};
</script>

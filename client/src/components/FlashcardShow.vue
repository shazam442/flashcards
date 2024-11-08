<template>
  <div>
    <h2>{{ flashcard.question }}</h2>
    <p>{{ flashcard.answer }}</p>
    <div
      style="
        padding: 1rem;
        background-color: darkred;
        justify-content: space-around;
      "
      @click="deleteFlashcard(flashcard.id)"
    >
      !delete!
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["flashcard", "deleteFlashcard"]);

const API_FLASHCARDS_ENDPOINT = "http://localhost:3000/flashcards";
</script>

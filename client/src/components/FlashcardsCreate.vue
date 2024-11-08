<template>
  <!-- Flashcard create Form -->
  <input
    type="text"
    v-model="flashcardTitleInput"
    placeholder="Title"
    class="flashcard-create-input title-input"
  />

  <input
    type="text"
    v-model="flashcardQuestionInput"
    placeholder="Question"
    class="flashcard-create-input question-input"
  />

  <input
    type="text"
    v-model="flashcardSolutionInput"
    placeholder="Solution"
    class="flashcard-create-input solution-input"
  />
  <!--  -->

  <!-- action buttons -->
  <button v-if="inEditMode" @click="updateFlashcard">Update</button>
  <button v-if="inEditMode" @click="cancelEditMode">Cancel</button>

  <button v-else @click="createFlashcard">Create</button>
  <!--  -->
</template>

<script setup>
import { ref, onMounted } from "vue";
const API_FLASHCARDS_ENDPOINT = "http://localhost:3000/flashcards";

const inEditMode = ref(false);

const flashcardTitleInput = ref("");
const flashcardQuestionInput = ref("");
const flashcardSolutionInput = ref("");

const createFlashcard = async () => {
  const response = await fetch(API_FLASHCARDS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: flashcardTitleInput.value,
      question: flashcardQuestionInput.value,
      solution: flashcardSolutionInput.value,
    }),
  });

  const data = await response.json();

  // redirect to flashcards page
  window.location.href = "/";
};
</script>

<style scoped>
.flashcard-create-input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 20rem;
  display: block;
}
</style>

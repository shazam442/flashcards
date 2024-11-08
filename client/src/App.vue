<template>
  <main>
    <h2>{{ $route.fullPath }}</h2>
    <h1>Flashcards</h1>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  display: grid;
  place-items: center;
  height: 100%;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

h1 {
  color: #42b883;
  top: 0;
  left: 0;
  margin: 0;
  padding: 1rem;
}
</style>

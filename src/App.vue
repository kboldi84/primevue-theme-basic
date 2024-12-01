<script setup>
import { ref } from 'vue';

const value = ref(null);


function toggleDarkMode(){
  document.documentElement.classList.toggle('my-app-dark');
}

</script>


<template>
  <div class="my-card">
   <InputText type="text" name='input' v-model="value" />
   <Button label="Success"  />
<br />
   <Button label="Toggle Dark Mode" @click="toggleDarkMode"></Button>
    </div>
</template>


<style>
body {
    padding: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--body-bg);
}

:root {
    --body-bg: var(--p-surface-50);
    --card-bg: var(--p-surface-0);
    --card-border: var(--p-surface-200);
}

:root[class="my-app-dark"] {
    --body-bg: var(--p-surface-950);
    --card-bg: var(--p-surface-900);
    --card-border: var(--p-surface-700);
}
.my-card{
    background-color: var(--card-bg);
    padding: 2rem;
    border: 1px solid var(--card-border);
    border-radius: 12px;
  }
</style>

<template>
  <div class="app">
    <Person ref="person" />
  </div>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {ref} from "vue";

  let person = ref()
  console.log(person.value);
</script>

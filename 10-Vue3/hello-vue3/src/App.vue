<template>
  <div class="app">
    <MyHook />
    <Person ref="person" />
    <Foo />
  </div>
</template>

<script lang="ts" setup name="App">
  import MyHook from "@/components/MyHook.vue";
  import Person from './components/Person.vue'
  import Foo from './components/Foo.vue'
  import {ref} from "vue";

  let person = ref()
  console.log(person.value);
</script>

<script setup lang="ts" name="Foo">
  import {type Foo, type Foos} from "@/types";
  import {reactive} from "vue";
  let foo: Foo = {id: 'asdfksjfk1', name: 'pengbin', age: 23};
  // let fooList: Array<Foo> = [
  // let fooList: Foos = [
  let fooList = reactive<Foos>([
    {id: 'asdfksjfk1', name: 'pengbin', age: 23},
    {id: 'asdfksjfk2', name: 'pengbi1', age: 24},
    {id: 'asdfksjfk3', name: 'pengbi2', age: 25}
  ])
  console.log(foo);
  console.log(fooList);
</script>

<template>
  <div class="foo"></div>
</template>

<style scoped>
.foo {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
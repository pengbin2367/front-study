<script setup lang="ts" name="MyHook">
  import useDog from "@/hooks/useDog";
  import UseSum from "@/hooks/useSum";

  const { sum, add } = UseSum();
  const { dogList, getDog } = useDog();
</script>

<template>
  <div class="hook">
    <h1>sum = {{sum}}</h1>
    <button @click="add">sum++</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" />
    <br>
    <button @click="getDog">more dog</button>
  </div>
</template>

<style scoped>
.hook {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
img {
  height: 100px;
  margin: 0 10px;
}
</style>
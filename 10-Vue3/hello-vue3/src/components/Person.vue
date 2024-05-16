<template>
  <div class="person">
    <h1>one {{ car.band }} car, price {{ car.price }} w</h1>
    <button @click="changePrice">update car price</button>
    <br>
    <h1>Games</h1>
    <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    <button @click="changeGame">update</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { reactive } from 'vue'
  let car = reactive({ band: 'benchi', price: 100 })
  let games = reactive([
    { id:"1", name:"game1" },
    { id:"2", name:"game2" },
    { id:"3", name:"game3" },
    { id:"4", name:"game4" }
  ])
  function changePrice() {
    car.price += 10;
  }
  function changeGame() {
    games[0].name = "game1 update"
  }
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>

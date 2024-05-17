<template>
  <div class="app">
    <h2 class="title">Vue Router</h2>
    <div class="nav">
      <RouterLink to="/home" class="active">Home</RouterLink>
      <RouterLink :to="{name: 'About'}" class="active">About</RouterLink>
      <RouterLink :to="{path: '/contact'}" class="active">Contact</RouterLink>
    </div>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
  import {RouterView, RouterLink} from "vue-router";
</script>

<style scoped>
.title {
  text-align: center;
  word-spacing: 5px;
  margin: 30px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg, gray, white);
  border-radius: 10px;
  box-shadow: 0 0 2px;
  font-size: 30px;
}
.nav {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}
.nav a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}
.nav a.active {
  background-color: #64967E;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
}
.content {
  margin: 30px auto 0;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}

</style>
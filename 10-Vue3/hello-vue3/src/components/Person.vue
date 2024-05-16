<template>
  <div class="person">
    <h2>sum = {{sum}}</h2>
    <button @click="changeSum">Click sum++</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { ref, watch } from 'vue'

  let sum = ref(0)
  function changeSum() {
    sum.value++;
  }

  // can't watch ref.value, only watch ref
  // so here is not sum.value
  const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log(newValue, oldValue)
    if (newValue > 10) stopWatch()
  })
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

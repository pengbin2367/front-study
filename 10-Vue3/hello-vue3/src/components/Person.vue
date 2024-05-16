<template>
  <div class="person">
    FirstName: <input type="text" v-model="firstName" /><br>
    LastName: <input type="text" v-model="lastName" /> <br>
    Name: <span>{{fullName}}</span> <br>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { ref, computed } from 'vue'

  let firstName = ref('peng')
  let lastName = ref('bin')

  let fullName = computed(() => {
    return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + "-" + lastName.value
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

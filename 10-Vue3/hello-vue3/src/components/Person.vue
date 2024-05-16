<template>
  <div class="person">
    <h2>sum = {{sum}}</h2>
    <button @click="changeSum">Click sum++</button>
    <br>
    <h1>name {{person.name}}</h1>
    <h1>age {{person.age}}</h1>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
    <button @click="changePerson">chagePerson</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {reactive, ref, watch, watchEffect} from 'vue'

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

  let person = reactive({
    name: "pengbin",
    age: 23,
    car: {
      c1: 'a',
      c2: 'b'
    }
  })
  function changeName() {
    person.name = "pengbin-update"
  }
  function changeAge() {
    person.age = 3
  }
  function changePerson() {
    person = Object.assign({ name: "qingke", age: 2 })
  }
  // watch reactive obj open deep options default and can't close
  watch(person, (newValue, oldValue) => {
    console.log(newValue, oldValue)
  })
  watch(() => person.name, (newValue, oldValue) => {
    console.log(newValue, oldValue)
  })
  watch(() => person.car, (newValue, oldValue) => {
    console.log(newValue, oldValue)
  })
  watch([() => person.age, () => person.car], (newValue, oldValue) => {
    console.log(newValue, oldValue)
  })
  watchEffect(() => {
    if (person.name === "qingke") {
      console.log(6666666666666666)
    }
  })

  let a = ref(0)
  let b = ref(1)
  let c = ref(2)
  // use defineExpose func to expose to parent
  defineExpose({a,b,c})
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

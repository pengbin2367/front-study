<template>
  <div class="count">
    <h2>当前求和为：{{ sum }} , {{bigSum}}</h2>
    <h3>{{name}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from "vue";
import {storeToRefs} from "pinia";
import {useCountStore} from "@/store/count";

const countStore = useCountStore();
const {sum, name, bigSum} = storeToRefs(countStore);
// 数据
let n = ref(1) // 用户选择的数字

// 方法
function add(){
  // countStore.$patch({
  //   sum: 666,
  //   name: 'qingke'
  // })
  countStore.increment(n.value)
}
function minus(){
  countStore.sum -= n.value
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,button {
  margin: 0 5px;
  height: 25px;
}
</style>
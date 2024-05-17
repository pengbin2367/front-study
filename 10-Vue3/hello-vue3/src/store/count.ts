import {defineStore} from "pinia";

export const useCountStore = defineStore("count", {
    actions: {
      increment(value: number) {
          this.sum += value;
      }
    },
    state() {
        return {
            sum: 6,
            name: 'pengbin'
        }
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
})
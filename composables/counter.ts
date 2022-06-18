import type { Ref } from 'vue'
export const inc = (counter: Ref<number>) => () => counter.value++
export const dec = (counter: Ref<number>) => () => counter.value--

export const useCounter = () => {
  const counter = ref(0)
  return {
    counter: readonly(counter),
    increment: inc(counter),
    decrement: dec(counter),
  }
}

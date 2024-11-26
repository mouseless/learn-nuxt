export default function useCounter() {
  const count = ref(0);

  function increase() {
    count.value++;
  }

  return {
    count,
    increase
  };
}

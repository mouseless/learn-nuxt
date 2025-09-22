export default defineNuxtPlugin({
  name: "demo",
  setup() {
    const counter = useCounter();

    return {
      provide: {
        counter
      }
    };
  }
});

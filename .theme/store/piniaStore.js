import { defineStore } from "pinia";

export const usePiniaStore = defineStore("piniaStore", {
  state: () => ({
    titles: null
  }),
  actions: {
    setTitles(titles) {
      this.titles = titles;
    }
  }
});

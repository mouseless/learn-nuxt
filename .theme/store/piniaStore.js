import { defineStore } from "pinia";

export const usePiniaStore = defineStore("piniaStore", {
  state: () => ({
    titles: {}
  }),
  actions: {
    setTitles(titles) {
      this.titles = titles;
    }
  }
});

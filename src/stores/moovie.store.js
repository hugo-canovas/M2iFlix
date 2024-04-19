import { defineStore } from "pinia";

export const useMoovieStore = defineStore("moovie", {
  state() {
    return {
      _mooviesList: [],
    };
  },
  getters: {
    mooviesList(state) {
      return state._mooviesList;
    },
  },
  actions: {
    addMoovieInList(moovie) {
      this._mooviesList.push(moovie);
    },
  },
});

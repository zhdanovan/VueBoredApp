export default {
  state: {
    acts: [],
    options: [
      { text: "Музыка", value: "music" },
      { text: "Готовка", value: "cooking" },
      { text: "Образование", value: "education" },
      { text: "Деловая работа", value: "busywork" },
      { text: "Общение", value: "social" },
      { text: "Самоделки", value: "diy" },
      { text: "Расслабиться", value: "relaxation" },
      { text: "Благотворительность", value: "charity" },
      { text: "Развлечение", value: "recreational" },
    ],
  },
  mutations: {
    updateAct(state, acts) {
      state.acts = acts;
    },
  },
  getters: {
    allActs(state) {
      return state.acts;
    },
    getOption(state) {
      return state.options;
    },
  },
  actions: {
    async fetchActivity(context, query) {
      const res = await fetch(
        `http://www.boredapi.com/api/activity?type=${query}`
      );
      const acts = await res.json();
      console.log(acts);
      context.commit("updateAct", acts);
    },
  },
};

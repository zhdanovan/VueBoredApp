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
    isLoading: false,
  },
  mutations: {
    updateAct(state, acts) {
      state.acts = acts;
    },
    updateLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  getters: {
    allActs(state) {
      return state.acts;
    },
    getOption(state) {
      return state.options;
    },
    getLoading(state) {
      return state.isLoading;
    },
  },
  actions: {
    async fetchActivity(context, query) {
      context.commit("updateLoading", true);

      const res = await fetch(
        `https://www.boredapi.com/api/activity?type=${query}`
      );
      const acts = await res.json();
      console.log(acts);
      context.commit("updateAct", acts);
      context.commit("updateLoading", false);
    },
  },
};

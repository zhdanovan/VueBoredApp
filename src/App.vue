<template>
  <div id="app">
    <div class="act">
      <h2>{{ getDataActs }}</h2>
      <button @click="fetchATC">Refresh</button>
      <select v-model="value">
        <option v-for="option in getDataOptions" :key="option.text">
          {{ option.value }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "",
    };
  },
  computed: {
    getDataActs() {
      console.log(this.$store.getters.allActs);
      console.log();
      const actes = this.$store.getters.allActs;
      return actes.activity;
    },
    getDataOptions() {
      return this.$store.getters.getOption;
    },
  },
  async mounted() {
    this.$store.dispatch("fetchActivity");
  },
  methods: {
    fetchATC() {
      console.log(this.value);
      return this.$store.dispatch("fetchActivity", this.value);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

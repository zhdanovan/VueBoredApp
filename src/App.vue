<template>
  <div id="app">
    <div class="act">
      <h2>{{ getDataActs }}</h2>
      <div class="btn">
        <el-button type="primary" :loading="getDataLoading" @click="fetchATC"
          >I am bored</el-button
        >
      </div>
      <el-select v-model="value">
        <el-option
          v-for="option in getDataOptions"
          :key="option.text"
          :value="option.value"
        >
          {{ option.value }}
        </el-option>
      </el-select>
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
    getDataLoading() {
      return this.$store.getters.getLoading;
    },
  },
  methods: {
    fetchATC() {
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  margin: 10%;
}
</style>

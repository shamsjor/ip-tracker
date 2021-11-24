<template>
  <Search @passData="passData($event)" />
  <Result :result="result" />
  <Map :result="result" />
</template>

<script>
import Search from "./components/search.vue";
import Result from "./components/result.vue";
import Map from "./components/map.vue";

export default {
  name: "App",
  components: {
    Search,
    Result,
    Map,
  },
  data() {
    return {
      result: {},
    };
  },
  methods: {
    passData(obj) {
      this.result = obj;
    },
  },
};
</script>

<style lang="scss">
$dark-color: hsl(0, 0%, 17%);
$grey-color: hsl(0, 0%, 59%);
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  margin: 0px;
  font-family: "Rubik", sans-serif;
  // overflow: hidden;
}
</style>

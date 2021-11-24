<template>
  <div class="search">
    <h1>IP Address Tracker</h1>
    <form>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for any IP address or domain"
        v-model="input"
      />
      <button @click.prevent="search">
        <img src="../assets/images/icon-arrow.svg" alt="" />
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      input: ``,
    };
  },
  methods: {
    search() {
      let request = new XMLHttpRequest();
      request.open(
        `GET`,
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_Xdh6asOoss33940Fk0X9jyCl267n2&ipAddress=${this.input}`
      );
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
          let obj = JSON.parse(request.responseText);
          this.$emit(`passData`, obj);
        }
      };
      request.send();
      this.input = ``;
    },
  },
  mounted() {
    let request = new XMLHttpRequest();
    request.open(`GET`, `https://api.ipify.org/?format=json`);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        let obj = JSON.parse(request.responseText);
        this.input = obj.ip;
        document.querySelector(`button`).click();
      }
    };
    request.send();
    this.input = ``;
  },
};
</script>

<style lang="scss" scoped>
.search {
  background-image: url("../assets/images/pattern-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding-top: 40px;
  height: 240px;
  h1 {
    color: white;
    margin-bottom: 10px;
  }
  form {
    #search {
      padding: 20px;
      width: 50%;
      border: none;
      border-radius: 10px 0px 0px 10px;
      cursor: pointer;
      font-size: 14px;
    }
    button {
      background-color: black;
      padding: 19px;
      border: none;
      border-radius: 0px 10px 10px 0px;
      cursor: pointer;
    }
  }
  input:focus {
    outline: none;
    border: none;
  }
}
@media (max-width: 768px) {
  .search {
    height: 300px;
  }
}
</style>

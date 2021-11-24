<template>
  <div class="result">
    <div class="ip">
      <h4>IP Address</h4>
      <p>{{ data.ip }}</p>
    </div>
    <div class="location">
      <h4>Location</h4>
      <p>{{ `${data.location.region},  ${data.location.city}` }}</p>
    </div>
    <div class="timezone">
      <h4>Timezone</h4>
      <p>UTC {{ data.location.timezone }}</p>
    </div>
    <div class="isp">
      <h4>ISP</h4>
      <p>{{ data.isp }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Result",
  props: ["result"],
  data() {
    return {
      address: {
        ip: ``,
        location: {
          country: ``,
          region: ``,
          city: ``,
          timezone: ``,
        },
        isp: `SpaceX Starlink`,
      },
    };
  },
  computed: {
    data() {
      if (this.result.ip === undefined) {
        return this.address;
      } else return this.result;
    },
  },
};
</script>
<style lang="scss" scoped>
.result {
  display: flex;
  padding: 50px;
  background: white;
  position: absolute;
  top: 195px;
  left: 12%;
  border-radius: 10px;
  justify-content: space-between;
  width: 80%;
  div {
    border-right: 1px solid hsl(0, 0%, 59%);
    padding-right: 50px;
    h4 {
      font-weight: normal;
      color: hsl(0, 0%, 59%);
      margin-bottom: 5px;
    }
    p {
      color: hsl(0, 0%, 16%);
      font-weight: bold;
      font-size: 18px;
    }
  }
  .isp {
    border: none;
  }
}
@media (max-width: 768px) {
  .result {
    flex-direction: column;
    top: 154px;
    padding: 30px;
    text-align: center;
    div {
      border-right: none;
      margin-bottom: 2px;
    }
  }
}
</style>

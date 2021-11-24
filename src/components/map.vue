<template>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "Map",
  props: ["result"],
  data() {
    return {
      lat: ``,
      lng: ``,
    };
  },
  mounted() {
    this.map();
  },
  updated() {
    document.querySelector(`#map`).remove();
    let map = document.createElement(`div`);
    map.id = `map`;
    document.querySelector(`#app`).appendChild(map);
    this.map();
  },

  computed: {
    view() {
      if (this.result.ip === undefined) {
        return { lat: this.lat, lng: this.lng };
      } else
        return { lat: this.result.location.lat, lng: this.result.location.lng };
    },
  },
  methods: {
    map() {
      let mymap = L.map("map").setView([this.view.lat, this.view.lng], 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1Ijoiam9yYmFuIiwiYSI6ImNrdzRsdGt1dzA3Y2kycXFsd2pldzQ4NWUifQ.p_VKkq-ArP-uX_v-bRMahA",
        }
      ).addTo(mymap);
      L.marker([this.view.lat, this.view.lng]).addTo(mymap);
      document.querySelector(
        `.leaflet-marker-pane img`
      ).src = require(`../assets/images/icon-location.svg`);
      document.querySelector(`.leaflet-shadow-pane`).remove();
    },
  },
};
</script>
<style lang="scss">
#map {
  height: 425px;
  width: 100%;
  z-index: -1;
}
</style>

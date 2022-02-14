<template>
 <div id="container">
   <div id="mapContainer"></div>
 </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default {
  name: 'Map',
  data() {
    return {
      center: [37, 7749, -122, 4194],
    }
  },
  methods: {
    setupLeafletMap() {
      this.map = L.map('mapContainer').setView([51.8871, 4.4900], 12);

      this.tileLayer = L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
        },
      );

      this.tileLayer.addTo(this.map);
      L.marker([51.890617, 4.484581]).addTo(this.map);
    }
    ,
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
 width: 80vw;
 height: 100vh;
}
</style>

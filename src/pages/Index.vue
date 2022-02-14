<template>
  <q-page padding>
    <div class="row card-container">
      <restaurant-card
      v-for='restaurant in restaurants'
      :key='restaurant.id'
      :id='restaurant.id'
      />
    </div>
    <div class="fixed-bottom-right q-ma-md">
      <q-btn
        solid
        color='secondary'
        round
        icon="rate_review"
        class='q-ma-xs'
        @click='openRatingDialog'
      />
      <br/>
      <q-btn
        solid
        color='secondary'
        round
        icon="storefront"
        class='q-ma-xs'
        @click='openRestaurantDialog'
      />
    </div>
    <map-component/>
    <restaurant-dialog ref='restaurant-dialog' />
    <rating-dialog ref='rating-dialog' />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex'

import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantDialog from '../components/RestaurantDialog.vue'
import RatingDialog from '../components/RatingDialog.vue'
import MapComponent from '../components/MapComponent.vue'

export default defineComponent({

  name: 'PageIndex',

  components: {
    RestaurantCard,
    RestaurantDialog,
    RatingDialog,
    MapComponent,
  },

  computed: {
    ...mapGetters({
      restaurants: 'restaurants/list',
    }),
  },

  methods: {
    openRestaurantDialog() {
      this.$refs['restaurant-dialog'].open()
    },
    openRatingDialog() {
      this.$refs['rating-dialog'].open()
    },
  },
});
</script>

<style>
.card-container {
  min-width: 200px;
  width: 100%;
}
</style>>

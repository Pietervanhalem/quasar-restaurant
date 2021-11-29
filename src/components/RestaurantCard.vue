<template>
<q-card class="q-ma-lg restaurant-card">
  <q-card-section class="bg-primary text-white row">
    <div class="col-8 card-title">
      {{restaurant.name}}
    </div>
    <q-btn
      class="col-2"
      flat
      dense
      round
      icon='visibility'
      @click='goToRestaurant'
    />
    <q-btn
      class="col-2"
      flat
      dense
      round
      icon='edit'
      @click='editRestaurant'
    />
  </q-card-section>
  <q-card-section>
    <div>Current rating: {{rating}}</div>
    <div>Number of ratings: {{ratings.length}}</div>
  </q-card-section>
</q-card>
<restaurant-dialog ref='restaurant-dialog' />
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex'
import RestaurantDialog from 'components/RestaurantDialog.vue'

export default defineComponent({

  name: 'RestaurantCard',

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  components: { RestaurantDialog },

  computed: {
    ...mapGetters({
      getRestaurant: 'restaurants/get',
      restaurantRatings: 'ratings/restaurantRatings',
    }),

    restaurant() { return this.getRestaurant(this.id) },
    ratings() { return this.restaurantRatings(this.id).map(rating => rating.rating) },
    rating() { return this.ratings.length > 0 ? this.ratings.reduce((a, b) => a + b, 0) / this.ratings.length : 'No ratings yet..' },
  },

  methods: {
    goToRestaurant() {
      this.$router.push({
        name: 'restaurant',
        params: { restaurantId: this.restaurant.id },
      })
    },
    editRestaurant() {
      this.$refs['restaurant-dialog'].open(this.id)
    },
  },
});
</script>

<style>
.restaurant-card {
  width: 100%;
  max-width: 300px;
}

.card-title{
  display: flex;
  align-items: center;
}
</style>>

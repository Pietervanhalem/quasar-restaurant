<template>
  <q-page padding>
    <q-btn
      flat
      icon='arrow_back'
      label='Go back to restaurant overview'
      @click='backHome'
    />
    <h1>{{restaurant.name}}</h1>
    <q-card>
      <q-card-section class="bg-grey text-white row">
        Ratings
      </q-card-section>
      <q-card-section class='row'>
        <rating-card
          v-for='rating in ratings'
          :key='rating.id'
          :id='rating.id'
        />
      </q-card-section>
    </q-card>
    <div class="fixed-bottom-right q-ma-md">
       <q-btn
        solid
        color='secondary'
        round
        icon="rate_review"
        class='q-ma-xs'
        @click='openRatingDialog'
      />
    </div>
    <restaurant-dialog ref='restaurant-dialog' />
    <rating-dialog ref='rating-dialog'/>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { defineComponent } from 'vue';
import RatingCard from '../components/RatingCard.vue'
import RatingDialog from '../components/RatingDialog.vue'
import RestaurantDialog from '../components/RestaurantDialog.vue'

export default defineComponent({

  name: 'PageRestaurant',

  components: { RatingCard, RatingDialog, RestaurantDialog },

  computed: {
    ...mapGetters({
      getRestaurant: 'restaurants/get',
      restaurantRatings: 'ratings/restaurantRatings',
    }),
    restaurantId() { return this.$route.params.restaurantId },
    restaurant() { return this.getRestaurant(this.restaurantId) },
    ratings() { return this.restaurantRatings(this.restaurantId) },
  },

  methods: {
    backHome() {
      this.$router.push({ name: 'index' })
    },

    openRatingDialog() {
      this.$refs['rating-dialog'].open()
    },
  },
})
</script>

<template>
<q-card class="q-ma-sm rating-card">
  <q-card-section class='row'>
    <div class='col-11'>
      <div>Rating: {{rating.rating}}</div>
      <div>Reviewer: {{rating.ratedBy}}</div>
    </div>
    <div class='col-1'>
      <q-btn
        class="col-2"
        flat
        dense
        round
        icon='edit'
        @click='editRating'
      />
    </div>
  </q-card-section>
</q-card>
<rating-dialog ref='rating-dialog'/>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex'
import RatingDialog from './RatingDialog.vue'

export default defineComponent({

  name: 'RatingCard',

  components: { RatingDialog },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapGetters({
      getRating: 'ratings/get',
    }),
    rating() { return this.getRating(this.id) },
  },

  methods: {
    editRating() {
      this.$refs['rating-dialog'].open(this.id)
    },
  },
});
</script>

<style>
.rating-card {
  width: 100%;
}
</style>>

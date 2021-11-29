<template>
<q-dialog
  v-model="isOpen"
  @before-hide='close'
>
  <q-card>
    <q-card-section class="bg-primary text-white row">
      {{isNew ? 'Add a new rating' : rating.name}}
    </q-card-section>

    <q-form @submit='save'>
      <q-card-section>
        <q-select
          v-model='rating.restaurantId'
          :options='restaurants.map(e => e.id)'
          :option-label="(val) => restaurants.find(e => e.id ===val).name"
          label='Restaurant'
          :rules='[requiredValidator]'
        />
        <q-input
          v-model='rating.rating'
          type='number'
          label='rating'
          :step='0.01'
          :rules='[requiredValidator, rangeValidator]'
        />
        <q-input
          v-model='rating.ratedBy'
          label='my name'
          :rules='[requiredValidator]'
        />
      </q-card-section>

      <q-card-actions class='float-right'>
        <q-btn
          label='save'
          type='submit'
          color='primary'
        />
        <q-btn
          label='close'
          @click='close'
          color='secondary'
        />
      </q-card-actions>
    </q-form>
  </q-card>
</q-dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex'
import _ from 'lodash'

export default defineComponent({

  name: 'RatingDialog',

  data() {
    return {
      isOpen: false,
      isNew: false,
      rating: {},
    };
  },

  computed: {
    ...mapGetters({
      restaurants: 'restaurants/list',
      getRatings: 'ratings/get',
    }),
  },

  methods: {
    open(id) {
      this.isOpen = true
      if (id) {
        this.isNew = false
        this.rating = _.cloneDeep(this.getRatings(id))
      } else {
        this.isNew = true
        this.rating = {}
      }
    },

    close() {
      this.rating = {}
      this.isOpen = false
    },

    save() {
      this.rating.rating = parseFloat(this.rating.rating)
      if (this.isNew) {
        this.$store.dispatch('ratings/add', this.rating)
      } else {
        this.$store.dispatch('ratings/update', this.rating)
      }
      this.close()
    },

    requiredValidator(name) {
      if ([undefined, null, ''].includes(name)) {
        return 'This field is required'
      }
      return true
    },

    rangeValidator(val) {
      if (Number.isNaN(val)) {
        return 'The Rating is required.'
      }
      if (val < 0 || val > 5) {
        return 'The rating should be between 0 and 5.'
      }
      return true
    },
  },

})
</script>

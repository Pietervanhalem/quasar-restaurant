<template>
<q-dialog
  v-model="isOpen"
  @before-hide='close'
>
  <q-card>
    <q-card-section class="bg-primary text-white row">
      {{isNew ? 'Add a new restaurant' : restaurant.name}}
    </q-card-section>

    <q-form @submit='save'>
      <q-card-section>
        <q-input
          v-model='restaurant.name'
          label='name'
          :rules='[requiredValidator, uniqueValidator]'
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

  name: 'RestaurantDialog',

  data() {
    return {
      isOpen: false,
      isNew: false,
      restaurant: {},
    };
  },

  computed: {
    ...mapGetters({
      restaurants: 'restaurants/list',
      getRestaurant: 'restaurants/get',
    }),
  },

  methods: {
    open(id) {
      this.isOpen = true
      if (id) {
        this.isNew = false
        this.restaurant = _.cloneDeep(this.getRestaurant(id))
      } else {
        this.isNew = true
        this.restaurant = {}
      }
    },

    close() {
      this.restaurant = {}
      this.isOpen = false
    },

    save() {
      if (this.isNew) {
        this.$store.dispatch('restaurants/add', this.restaurant)
      } else {
        this.$store.dispatch('restaurants/update', this.restaurant)
      }
      this.close()
    },

    requiredValidator(name) {
      if ([undefined, null, ''].includes(name)) {
        return 'This field is required'
      }
      return true
    },

    uniqueValidator(name) {
      if (this.restaurants.map(e => e.name).includes(name)) {
        return 'The restaurant name should be unique'
      }
      return true
    },
  },

})
</script>

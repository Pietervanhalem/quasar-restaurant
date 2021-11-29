<template>
  <div class="fixed-center text-center">
    <p>
      <img src='~assets/sad.svg' style='width:30vw;max-width:150px;' />
    </p>
    <div class=".text-faded">
      <h4>
        Whoops, something went wrong loading the app!
      </h4>
      <h6 v-if='details'>
        : strong {{ details }}
      </h6>
    </div>
    <p>
      Please contact support
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppError',
  props: {
    details: {
      type: String,
      default: '',
    },
  },
});
</script>

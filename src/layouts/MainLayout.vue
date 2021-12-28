<template>
  <q-layout view="lHh Lpr lFf">
    <div v-if='appState === "loading"'>

    <div class='center'>
      <q-spinner class=".centered-spinner" size='4rem' color='primary' />
    </div>
  </div>
  <div v-else-if='appState === "error"'>
    <app-error :details='appStateDetails' />
  </div>
  <div v-else>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          round
          flat
          dense
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Restaurant App
        </q-toolbar-title>

        <div>Restaurant app V{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </div>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';
import initState from 'boot/init-state.js'
import { mapGetters } from 'vuex'
import AppError from 'components/AppError.vue'

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: '/#/',
  },
  {
    title: 'About',
    icon: 'info',
    link: '/#/about',
  },
  {
    title: 'All restaurants',
    icon: 'restaurant',
    link: '/#/restaurants',
  },
  {
    title: 'My profile',
    icon: 'account_circle',
    link: '/#/myprofile',
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/#/settings',
  },

];

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    AppError,
  },

  computed: {
    ...mapGetters({
      appState: 'app/appState',
      appStateDetails: 'app/appStateDetails',
    }),
  },

  async created() {
    initState({ store: this.$store })
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

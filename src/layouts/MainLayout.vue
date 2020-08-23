<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      v-if="$q.platform.is.mobile"
      reveal
      @click="toggleMenu"
    >
      <q-toolbar>
        <q-btn
          icon="menu"
          flat
          round
          dense
        />
        <q-toolbar-title
          v-if="$route.name !== 'about'"
        >
          Gabriel Silveira
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="!$q.platform.is.mobile"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <main-menu
      />
    </q-drawer>

    <q-page-container>
      <langs-flags
        v-if="!$q.platform.is.mobile"
      />

      <q-dialog
        v-model="showMobileMenu"
        persistent
        maximized
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card
          class="flex items-center bg-secondary text-white"
        >
          <q-card-section
            class="absolute-top-right"
          >
            <q-btn
              icon="close"
              flat
              round
              v-close-popup
            />
          </q-card-section>
          <q-card-section class="q-pt-none full-width">
            <q-list
              separator
              dark
            >
              <q-item
                v-for="NAME of ROUTES"
                :key="NAME"
                clickable
                v-ripple
                @click="goPage(NAME)"
              >
                <q-item-section>{{ $t(`pages.titles.${NAME}`) }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-dialog>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ROUTES from 'src/router/routes-names'

export default {
  name: 'MainLayout',
  components: {
    LangsFlags: () => import('src/components/langs-flags'),
    MainMenu: () => import('src/components/main-menu')
  },
  data: () => ({
    ROUTES,
    showMobileMenu: false
  }),
  methods: {
    async goPage (name) {
      if (this.$route.name === name) {
        this.showMobileMenu = false
        return
      }

      if (await this.$router.push({ name })) {
        this.showMobileMenu = false
      }
    },
    toggleMenu () {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>

<style>
.langs-buttons {
  z-index: 99999;
  position: fixed;
  top: 0px;
  right: 0px;
}
</style>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      v-if="$q.platform.is.mobile"
      reveal
    >
      <q-toolbar
        class="bg-white"
      >
        <q-btn
          icon="menu"
          color="primary"
          flat
          round
          dense
          @click="drawerLeft = !drawerLeft"
        />
        <q-toolbar-title></q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <main-menu />
    </q-drawer>

    <q-page-container>
      <langs-flags
        v-if="!$q.platform.is.mobile"
      />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
    LangsFlags: () => import('src/components/langs-flags'),
    MainMenu: () => import('src/components/main-menu')
  }
}
</script>

<style>
.profile-image {
  width: 130px;
  border-radius: 100%;
  border: 8px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
}

.langs-buttons {
  z-index: 99999;
  position: fixed;
  top: 0px;
  right: 0px;
}
</style>

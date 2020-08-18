<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <div class="absolute-center full-width text-center q-pt-lg q-pb-md">
        <img
          class="profile-image"
          src="~assets/imgs/gabriel-silveira-profile.png"
          title="Gabriel Silveira"
        />
        <q-list
          class="full-width"
          dark
        >
          <q-item
            v-for="items of menu"
            :key="items.name"
            clickable
            v-ripple
            @click="goPage(items.path)"
          >
            <q-item-section>{{ items.name }}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data: () => ({
    menu: [
      {
        name: 'SOBRE',
        path: 'home'
      },
      {
        name: 'EXPERIÊNCIA',
        path: 'experience'
      },
      {
        name: 'EDUCAÇÃO',
        path: 'education'
      },
      {
        name: 'HABILIDADES',
        path: 'skills'
      }/* ,
      {
        name: 'CONTATO',
        path: 'contact'
      },
      {
        name: 'CURRICULUM (PDF)'
      } */
    ]
  }),
  methods: {
    goPage (name) {
      this.$router.push({
        name
      })
    }
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
</style>

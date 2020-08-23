<template>
  <div
    class="full-height"
  >
    <div
      class="absolute-center full-width text-center q-pt-lg q-pb-md"
      style="margin-top: -50px"
    >
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
          v-for="NAME of ROUTES"
          :key="NAME"
          clickable
          v-ripple
          @click="goPage(NAME)"
        >
          <q-item-section>{{ $t(`pages.titles.${NAME}`) }}</q-item-section>
        </q-item>
      </q-list>
    </div>

    <div
      class="absolute-bottom text-center"
    >
      <div
        class=" cursor-pointer q-pb-md q-pt-md bg-secondary"
        :title="$t('general.letsTalk')"
        @click="goWhatsappChat"
      >
        <div
          style="display:inline-block;width:100px"
        >
          <q-img
            src="~assets/imgs/whatsapp.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ROUTES from '../router/routes-names'

export default {
  name: 'MainMenuComponent',
  data: () => ({
    ROUTES
  }),
  methods: {
    goPage (name) {
      this.$router.push({
        name
      })
    },
    goWhatsappChat () {
      window.open('https://api.whatsapp.com/send?phone=5511976768736&text=Ol%C3%A1%2C%20Gabriel!')
    }
  }
}
</script>

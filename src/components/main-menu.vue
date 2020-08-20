<template>
  <div
    v-if="!$q.platform.is.mobile"
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

  <q-dialog
    v-else
    v-model="showMobileMenu"
    persistent
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-primary text-white">
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import ROUTES from '../router/routes-names'

export default {
  name: 'MainMenuComponent',
  props: {
    showMobileMenu: {
      type: Boolean,
      default: false
    }
  },
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

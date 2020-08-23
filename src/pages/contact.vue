<template>
  <q-page
    :class="isMobile ? 'q-pa-md' : 'q-pa-xl'"
  >
    <q-dialog
      v-model="sent"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
      class="flex"
    >
      <q-card class="bg-primary text-white">
        <q-card-section class="absolute-center text-center">
          <div class="confortaa-h2">Sua mensagem foi enviada</div>
          <div class="text-body1 q-mt-md">Em breve entrarei em contato. Muito obrigado!</div>
          <div class="q-mt-lg">
            <q-btn
              label="Voltar"
              color="secondary"
              @click="$router.push({ name: ROUTES.ABOUT })"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <div
      v-if="!sent"
      :class="isMobile ? '' : 'align-content-contact'"
    >
      <h1 class="confortaa-h2 text-primary">{{ $t('pages.contents.contact.title') }}</h1>

      <div
        class="row q-mt-md"
      >
        <div
          class="col-12 q-pb-md text-body1"
          v-html="$t('pages.contents.contact.description')"
        />
      </div>

      <q-form
        :style="isMobile ? '' : 'width: 800px'"
        @submit="submit"
      >
        <div
          class="row q-col-gutter-lg"
        >
          <div class="col-xs-12 col-md-4">
            <q-input
              v-model="user.name"
              :placeholder="$t('pages.contents.contact.fields.name')"
              :rules="[ val => val && val.length > 0 || 'Informe seu nome']"
            />
          </div>
          <div class="col-xs-12 col-md-4">
            <q-input
              v-model="user.from"
              :placeholder="$t('pages.contents.contact.fields.email')"
              :rules="[val => !!val || 'Informe um e-mail válido', isValidEmail]"
            />
          </div>
          <div class="col-xs-12 col-md-4">
            <q-input
              v-model="user.phone"
              :placeholder="$t('pages.contents.contact.fields.phone')"
              mask="(##) #####-####"
              hint="Ex: (11) 91234-5678"
              :rules="[ val => val && val.length === 15 || 'Informe seu nome']"
            />
          </div>
        </div>
        <div
          class="row q-pt-lg"
        >
          <div class="col-12">
            <q-input
              v-model="user.message"
              type="textarea"
              :placeholder="$t('pages.contents.contact.fields.message')"
              :rules="[ val => val && val.length > 0 || 'Digite sua mensagem antes de enviar']"
            />
          </div>
        </div>
        <div
          class="row q-pt-lg"
        >
          <div class="col-12">
            <q-btn
              :class="isMobile ? 'full-width' : 'float-right'"
              color="primary"
              label="Enviar"
              type="submit"
              :loading="sending"
            />
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
import ValidationsMixin from '../validations'
import ROUTES from 'src/router/routes-names'

export default {
  name: 'ContactIndex',
  mixins: [ValidationsMixin],
  data: () => ({
    ROUTES,
    user: {
      name: '',
      email: '',
      from: '',
      message: ''
    },
    sending: false,
    sent: false
  }),
  computed: {
    isMobile () {
      return this.$q.platform.is.mobile
    }
  },
  methods: {
    async submit () {
      try {
        this.sending = true

        const subject = 'Novo contato do site'

        const {
          name,
          from,
          phone,
          message
        } = this.user

        const now = new Date()

        const html = `
          <p>Nome: ${name}</p>
          <p>E-mail: ${from}</p>
          <p>Celular: ${phone}</p>
          <p>Mensagem:<br />${message}</p>
          <p>Enviado em ${now}</p>
        `

        await axios.post(
          'http://54.94.108.25:7000/mailer',
          {
            subject,
            html,
            from
          }
        )

        this.sending = false
        this.sent = true
      } catch (error) {
        console.log(error)
        this.sending = false
      }
    }
  }
}
</script>

<style>
.align-content-contact {
  position: absolute;
  top: 50%;
  margin-top: -210px;
}
</style>

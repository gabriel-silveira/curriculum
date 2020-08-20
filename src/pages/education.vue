<template>
  <q-page class="q-pa-xl">
    <div class="align-content-education" style="width:50%">
      <h1 class="confortaa-h2 text-primary">{{ $t('pages.contents.education.title') }}</h1>

      <div
        class="q-mt-lg cursor-pointer"
        @click="goExternalLink('https://www.mackenzie.br/')"
      >
        <div style="float:left;width:80px;height:200px">
          <img
            width="58px"
            src="~assets/imgs/mackenzie.png"
          >
        </div>
        <div
          v-html="$t('pages.contents.education.description')"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'EducationIndex',
  methods: {
    goExternalLink (url) {
      window.open(url)
    }
  }
}
</script>

<style>
.align-content-education {
  position: absolute;
  top: 50%;
  margin-top: -150px;
}
</style>

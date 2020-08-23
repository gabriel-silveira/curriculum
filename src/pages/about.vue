<template>
  <q-page
    :class="$q.platform.is.mobile ? 'flex items-center q-pl-lg q-pr-lg bg-primary text-white' : 'q-pa-xl'"
  >
    <div
      v-if="!$q.platform.is.mobile"
      class="align-content-about"
    >
      <h1 class="confortaa-h1 text-primary">{{ $t('pages.contents.about.title') }}</h1>
      <!--<div class="text-body1">{{ $t('pages.contents.about.email') }}</div>-->
      <div
        class="text-body1 q-pt-lg"
        v-html="$t('pages.contents.about.description')"
      />
      <div
        class="dev-icons q-mt-xl"
      >
        <i
          class="devicon-github-plain text-primary cursor-pointer"
          title="Gabriel Silveira on Github"
          @click="goExternalLink('https://github.com/gabriel-silveira')"
        />
        <i
          class="devicon-linkedin-plain text-primary cursor-pointer"
          title="Gabriel Silveira on Linkedin"
          @click="goExternalLink('https://www.linkedin.com/in/gabriel-silveira/')"
        />
      </div>
    </div>
    <div
      v-else
      class="text-center"
    >
      <img
        src="~assets/imgs/gabriel-silveira-profile.png"
        class="profile-image"
        title="Gabriel Silveira"
      />
      <h1 class="confortaa-h1">{{ $t('pages.contents.about.title') }}</h1>
      <div
        class="text-body1 q-pt-lg"
        v-html="$t('pages.contents.about.description')"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    goExternalLink (url) {
      window.open(url)
    }
  }
}
</script>

<style>
.align-content-about {
  position: absolute;
  top: 50%;
  margin-top: -215px;
}

.dev-icons i {
  font-size: 40px;
  margin-right: 30px;
}
</style>

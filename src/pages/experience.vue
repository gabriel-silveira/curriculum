<template>
  <q-page
    :class="isMobile ? 'flex items-center q-pa-lg' : 'q-pa-xl'"
  >
    <h1 class="confortaa-h2 text-primary">Experiência</h1>

    <div
      :style="isMobile ? '' : 'width:80%'"
      class="row"
      :class="isMobile ? '' : 'q-mt-xl'"
    >
      <div
        v-for="(experience, index) of experiences"
        :key="index"
        class="col-12"
        :class="isMobile ? '' : 'q-pb-xl'"
      >
        <q-separator
          v-if="isMobile"
          class="q-mt-lg q-mb-lg"
        />
        <p>{{ experience.function }}</p>
        <p class="text-body1 text-bold text-primary q-mb-xs">{{ experience.company }}</p>
        <p class="text-caption">{{ experience.period }} ({{ experience.place }})</p>
        <div v-html="experience.description" />
        <q-chip
          v-for="(technology, index2) of experience.technologies"
          :key="`tech-${index2}`"
          v-html="technology"
          class="q-mt-md bg-grey-3"
        />
        <q-separator
          v-if="!isMobile"
          class="q-mt-xl"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import experiences from '../data/experiences'

export default {
  name: 'ExperienceIndex',
  data: () => ({
    experiences
  }),
  computed: {
    isMobile () {
      return this.$q.platform.is.mobile
    }
  }
}
</script>

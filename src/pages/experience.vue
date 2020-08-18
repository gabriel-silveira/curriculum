<template>
  <q-page class="q-pa-xl">
    <h1 class="confortaa-h2 text-primary">Experiência</h1>

    <div
      style="width:60%"
      class="row q-mt-xl"
    >
      <div
        v-for="(experience, index) of experiences"
        :key="index"
        class="col-12 q-pb-xl"
      >
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
        <q-separator class="q-mt-xl" />
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
  })
}
</script>

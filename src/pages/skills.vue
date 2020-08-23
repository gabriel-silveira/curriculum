<template>
  <q-page
    :class="isMobile ? 'flex items-center q-pa-lg' : 'q-pa-xl'"
  >
    <h1 class="confortaa-h2 text-primary">Habilidades</h1>

    <div
      v-if="isMobile"
      class="full-width"
    >
      <q-card flat class="bg-grey-2 q-mb-xl q-mt-lg">
        <q-card-section class="text-bold text-grey-7">
          {{ $t('pages.contents.skills.languages') }}
        </q-card-section>
      </q-card>

      <div
        class="row"
      >
        <div
          v-for="(skill, index1) of skills.firstLine"
          :key="`first-${index1}`"
          class="col-4 q-pr-md q-pl-md q-pb-lg"
        >
          <div v-html="skill.icon" />
          <div>{{ skill.name }}</div>
        </div>
        <div
          v-for="(skill, index2) of skills.secondLine"
          :key="`second-${index2}`"
          class="col-4 q-pr-md q-pl-md q-pb-lg"
        >
          <div v-html="skill.icon" />
          <div>{{ skill.name }}</div>
        </div>
      </div>

      <q-card flat class="bg-grey-2 q-mb-lg">
        <q-card-section class="text-bold text-grey-7">
          {{ $t('pages.contents.skills.workflow.subtitle') }}
        </q-card-section>

        <q-card-section v-html="$t('pages.contents.skills.workflow.col[2]')" />
        <q-card-section v-html="$t('pages.contents.skills.workflow.col[1]')" />
        <q-card-section v-html="$t('pages.contents.skills.workflow.col[0]')" />
      </q-card>
    </div>

    <div
      v-else
      class="row q-mt-xl"
    >
      <div
        class="col-12 q-pb-xl"
      >
        <q-card flat class="bg-grey-2 q-mb-xl">
          <q-card-section class="text-bold text-grey-7">
            {{ $t('pages.contents.skills.languages') }}
          </q-card-section>
        </q-card>
        <div
          class="row q-mb-xl devicons"
        >
          <div
            v-for="(skill, index1) of skills.firstLine"
            :key="`first-${index1}`"
            class="col q-pr-xl q-pl-xl q-pb-lg"
          >
            <div v-html="skill.icon" />
            <div>{{ skill.name }}</div>
          </div>
        </div>
        <div
          class="row q-mb-xl devicons"
        >
          <div
            v-for="(skill, index2) of skills.secondLine"
            :key="`second-${index2}`"
            class="col q-pr-xl q-pl-xl q-pb-lg"
          >
            <div v-html="skill.icon" />
            <div>{{ skill.name }}</div>
          </div>
        </div>

        <q-card flat class="bg-grey-2 q-mb-lg">
          <q-card-section class="text-bold text-grey-7">
            {{ $t('pages.contents.skills.workflow.subtitle') }}
          </q-card-section>
        </q-card>
        <div class="row">
          <div
            class="col-3"
            v-html="$t('pages.contents.skills.workflow.col[0]')"
          />
          <div
            class="col-3"
            v-html="$t('pages.contents.skills.workflow.col[1]')"
          />
          <div
            class="col-3"
            v-html="$t('pages.contents.skills.workflow.col[2]')"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import skills from '../data/skills'

export default {
  name: 'SkillsIndex',
  data: () => ({
    skills
  }),
  computed: {
    isMobile () {
      return this.$q.platform.is.mobile
    }
  }
}
</script>

<style>
.devicons {
   text-align: center;
}
</style>

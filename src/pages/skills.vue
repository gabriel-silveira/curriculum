<template>
  <q-page class="q-pa-xl">
    <h1 class="confortaa-h2 text-primary">Habilidades</h1>

    <div
      class="row q-mt-xl"
    >
      <div
        class="col-12 q-pb-xl"
      >
        <p class="text-body1 text-bold text-primary">Linguagens, ferramentas e frameworks</p>
        <div
          class="row q-mb-xl devicons"
        >
          <div
            v-for="(skill, index) of skills.firstLine"
            :key="index"
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
            v-for="(skill, index) of skills.secondLine"
            :key="index"
            class="col q-pr-xl q-pl-xl q-pb-lg"
          >
            <div v-html="skill.icon" />
            <div>{{ skill.name }}</div>
          </div>
        </div>
        <p class="text-body1 text-bold text-primary">Workflow</p>
        <div class="row">
          <div class="col-3">
            <p>- Mobile first</p>
            <p>- Design responsivo</p>
            <p>- Desenvolvimento ágil e Scrum</p>
          </div>
          <div class="col-3">
            <p>- Código limpo</p>
            <p>- Utilização de code style guide</p>
            <p>- Versionamento semântico e code review</p>
          </div>
          <div class="col-3">
            <p>- Análise de requisitos</p>
            <p>- Orientação a objetos</p>
          </div>
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
  })
}
</script>

<style>
.devicons {
   text-align: center;
}
</style>

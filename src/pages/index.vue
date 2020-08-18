<template>
  <q-page class="q-pa-xl">
    <div class="align-content">
      <h1 class="confortaa-h1 text-primary">Gabriel Silveira, desenvolvedor web</h1>
      <div class="text-body1">gabriel@gabrielsilveira.com.br</div>
      <div
        class="text-body1 q-pt-lg q-mt-lg"
      >
        <p>
          Sou desenvolvedor web com mais de 10 anos de atividade, com experiência em SPAs e back end Node JS, PHP e Python.
        </p>
        <p>
          Em busca de novas oportunidades.
        </p>
      </div>
      <div
        class="dev-icons q-mt-xl"
      >
        <i
          class="devicon-github-plain text-primary cursor-pointer"
          @click="goLink('https://github.com/gabriel-silveira')"
        />
        <i
          class="devicon-linkedin-plain text-primary cursor-pointer"
          @click="goLink('https://www.linkedin.com/in/gabriel-silveira/')"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    goLink (url) {
      window.open(url)
    }
  }
}
</script>

<style>
.align-content {
  position: absolute;
  top: 50%;
  margin-top: -150px;
}

.dev-icons i {
  font-size: 40px;
  margin-right: 30px;
}
</style>

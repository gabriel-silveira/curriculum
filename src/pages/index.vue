<template>
  <q-page class="q-pa-xl">
    <div class="align-content">
      <h1 class="confortaa-h1 text-primary">Gabriel Silveira, desenvolvedor web</h1>
      <div class="text-body1">gabriel@gabrielsilveira.com.br</div>
      <p
        class="text-body1 q-pt-lg q-mt-lg"
        style="width: 900px;"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
      </p>
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

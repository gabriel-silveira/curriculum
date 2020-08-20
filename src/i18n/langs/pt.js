const pt = {
  pages: {
    titles: {
      about: 'SOBRE',
      experience: 'EXPERIÊNCIA',
      education: 'EDUCAÇÃO',
      skills: 'HABILIDADES',
      contact: 'CONTATO'
    },
    contents: {
      about: {
        title: 'Gabriel Silveira, desenvolvedor web',
        email: 'gabriel@gabrielsilveira.com.br',
        description: `
          <p>Sou apaixonado por tecnologia.</p>
          <p>Tenho mais de 10 anos de experiência com desenvolvimento front end e back end.</p>
          <p>Adoro criar SPAs com Vue.js e React.</p>
          <p>APIs feitas em Node, Laravel e Flask são minhas preferidas.</p>
          <p>Em busca de novas oportunidades.</p>
        `
      },
      skills: {
        title: 'Habilidades',
        languages: 'LINGUAGENS E FERRAMENTAS',
        workflow: {
          subtitle: 'WORKFLOW',
          col: [
            `
              <p>- Mobile first design</p>
              <p>- Responsividade</p>
              <p>- Usabilidade</p>
            `,
            `
              <p>- Desenvolvimento ágil e Scrum</p>
              <p>- Utilização de code style guide</p>
              <p>- Código limpo</p>
            `,
            `
              <p>- Git flow</p>
              <p>- Versionamento semântico</p>
              <p>- Pull requests / Code review</p>
            `
          ]
        }
      },
      education: {
        title: 'Educação',
        description: `
          <p class="text-body1 text-bold text-red-9">Universidade Presbiteriana Mackenzie</p>
          <p class="text-bold">Tecnologia em Análise e Desenvolvimento de Sistemas</p>
          <p>2017 / 2020</p>
          <p>São Paulo, SP - Higienópolis</p>
        `
      },
      contact: {
        title: 'Entre em contato',
        description: `
          <p>Se você tiver dúvidas ou quiser conversar sobre um novo projeto, preencha o formulário abaixo:</p>
        `,
        mailMe: 'Ou envie um e-mail para <b>gabriel@gabrielsilveira.com.br</b>.',
        fields: {
          name: 'Seu nome',
          email: 'E-mail',
          phone: 'Celular',
          message: 'Digite sua mensagem...'
        }
      }
    }
  },
  validations: {
    //
  },
  general: {
    letsTalk: 'Vamos conversar?'
  }
}

export default pt

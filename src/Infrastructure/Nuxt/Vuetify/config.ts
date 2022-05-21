export default {
  customVariables: ['@abler/ats-front-resources-api/src/Infrastructure/Nuxt/Vuetify/v1/variables.scss'],
  defaultAssets: false,
  treeShaking: true,
  theme: {
    light: true,
    themes: {
      light: {
        anchor: '#00649b',
        dark: '#000000',
        primary: {
          lighten5: '#efe5f1',
          lighten4: '#d7bfdc',
          lighten3: '#bd96c6',
          lighten2: '#a36faf',
          lighten1: '#91549e',
          base: '#A36FAF',
          darken1: '#76368b',
          darken2: '#572a7a',
          darken3: '#572a7a',
          darken4: '#3e206a'
        },
        secondary: {
          base: '#60C3AD',
          lighten5: '#e2f4f1',
          lighten4: '#b8e5db',
          lighten3: '#8cd5c5',
          lighten2: '#60c3ae',
          lighten1: '#43b59c',
          darken1: '#2f997f',
          darken2: '#2a886f',
          darken3: '#257861',
          darken4: '#1c5b45'
        },
        tertiary: {
          base: '#DA6EAB',
          lighten5: '#f6e5f0',
          lighten4: '#ebbedb',
          lighten3: '#e296c3',
          lighten2: '#DA6EAB',
          lighten1: '#d55298',
          darken1: '#c4367f',
          darken2: '#ae3376',
          darken3: '#982f6e',
          darken4: '#72285f'
        },
        info: {
          base: '#00B1EE',
          lighten5: '#e0f4fc',
          lighten4: '#b0e4f8',
          lighten3: '#7bd2f4',
          lighten2: '#44c0f0',
          lighten1: '#00B1EE',
          darken1: '#0097dd',
          darken2: '#0085ca',
          darken3: '#0074b6',
          darken4: '#005495'
        },
        warning: {
          base: '#F2BF56',
          lighten5: '#fefcea',
          lighten4: '#fef7cb',
          lighten3: '#fdf2aa',
          lighten2: '#fded8b',
          lighten1: '#fbe874',
          darken1: '#f8d45e',
          darken2: '#F2BF56',
          darken3: '#eca84e',
          darken4: '#e28542'
        },
        error: {
          base: '#E25F59',
          lighten5: '#fcecee',
          lighten4: '#f9cfd3',
          lighten3: '#e69f9e',
          lighten2: '#d97b79',
          lighten1: '#E25F59',
          darken1: '#d74b41',
          darken2: '#c5433a',
          darken3: '#b83d34',
          darken4: '#aa3329'
        },
        success: {
          base: '#4BCE63',
          lighten5: '#e7f8e9',
          lighten4: '#c5edc9',
          lighten3: '#9ee2a6',
          lighten2: '#72d881',
          lighten1: '#4BCE63',
          darken1: '#00b43b',
          darken2: '#00a22e',
          darken3: '#009021',
          darken4: '#00700c'
        }
      }
    },
    options: {
      customProperties: true
    }
  }
}

import { setLocale } from 'yup'

setLocale({
  mixed: {
    required: 'En fait c\'est obligatoire, c\'est pour ça qu\'il y a une *'
  },
  string: {
    matches: 'Rien compris',
    // eslint-disable-next-line no-template-curly-in-string
    min: 'T\'es sûr(e) que ça doit fait moins de ${min} caractères ?',
    email: 'Pas sûr que ce soit ça'
  }
})

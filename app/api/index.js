import express from 'express'
import ContactFormSchema from '../yup/ContactFormSchema'
// import { sendMail } from '../server/Mailer'

const router = express.Router()
const app = express()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.post('/contact', (req, res) => {
  try {
    if (req.body.csrf !== req.session.token) {
      throw new Error('Wrong CSRF token')
    }
    ContactFormSchema.validateSync(req.body)
  } catch (e) {
    return res.status(400).json()
  }

  // send mail with defined transport object
  // sendMail({
  //   to: 'xavier.desbieys@gmail.com', // list of receivers
  //   subject: '[Site Web] Contact', // Subject line
  //   text: 'Hello world?', // plain text body
  //   html: '<b>Hello world?</b>' // html body
  // })
  // req.session.authUser = { username: req.body.test }
  console.log('send')
  res.status(204).json()
})

router.post('/auth', (req, res) => {
  if (req.body.password === 'demo') {
    req.session.isLogged = true
    return res.json()
  }
  res.status(401).json()
})

export default router

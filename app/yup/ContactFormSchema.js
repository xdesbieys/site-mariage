import { object, string } from 'yup'

const nameRegex = new RegExp(/^[A-Za-zÀ-Ÿ]+((\s)?(('|-)?([A-Za-zÀ-Ÿ])+))*$/)

export default object({
  lastName: string().required().min(3).matches(nameRegex),
  firstName: string().required().min(3).matches(nameRegex),
  email: string().required().email(),
  message: string().trim().required()
})

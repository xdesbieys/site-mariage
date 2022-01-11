<template>
  <form class="grid gap-4" @submit="submit">
    <InputType
      placeholder="Mot de passe *"
      :value="values.password"
      :touched="touched.password"
      :error="errors.password"
      :focus-callback="() => focus('password')"
      :change-callback="(value) => change('password', value)"
      :blur-callback="() => blur('password')"
    />
  </form>
</template>

<script>
import ContactFormSchema from '../../yup/ContactFormSchema'

const defaultData = {
  values: {
    password: ''
  },
  touched: {
    password: false,
    submit: false
  },
  errors: {
    password: null,
    submit: null
  }
}

export default {
  data () {
    return {
      ...defaultData
    }
  },
  methods: {
    focus (field) {
      this.touched[field] = false
      this.errors.submit = null
    },
    change (field, value) {
      this.values[field] = value
      this.validate(field)
    },
    blur (field) {
      this.validate(field)
      this.touched[field] = true
    },
    validate (field) {
      ContactFormSchema
        .validateAt(field, this.values)
        .then(() => {
          this.errors[field] = null
          this.errors.submit = null
        })
        .catch((error) => {
          this.errors[field] = error.message
          this.errors.submit = null
        })
    },
    async submit (e) {
      e.preventDefault()

      try {
        ContactFormSchema.validateSync(this.values)
        this.errors.submit = null
      } catch (e) {
        this.errors.submit = 'Je crois que t\'as oublié un truc, non ?'
        this.touched.submit = true
        return
      }

      try {
        await this.$axios.post('/api/auth', {
          ...this.values,
          csrf: this.$store.state.token
        })
      } catch (e) {
        //
      }
    }
  }
}
</script>

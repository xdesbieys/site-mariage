<template>
  <form class="grid gap-4" @submit="submit">
    <InputType
      placeholder="Nom *"
      :value="values.lastName"
      :touched="touched.lastName"
      :error="errors.lastName"
      :focus-callback="() => focus('lastName')"
      :change-callback="(value) => change('lastName', value)"
      :blur-callback="() => blur('lastName')"
    />
    <InputType
      placeholder="Prénom *"
      :value="values.firstName"
      :touched="touched.firstName"
      :error="errors.firstName"
      :focus-callback="() => focus('firstName')"
      :change-callback="(value) => change('firstName', value)"
      :blur-callback="() => blur('firstName')"
    />
    <InputType
      placeholder="Email *"
      :value="values.email"
      :touched="touched.email"
      :error="errors.email"
      :focus-callback="() => focus('email')"
      :change-callback="(value) => change('email', value)"
      :blur-callback="() => blur('email')"
    />
    <InputType
      name="phoneNumber"
      placeholder="Numéro de téléphone *"
      :value="values.phoneNumber"
      :touched="touched.phoneNumber"
      :error="errors.phoneNumber"
      :focus-callback="() => focus('phoneNumber')"
      :change-callback="(value) => change('phoneNumber', value)"
      :blur-callback="() => blur('phoneNumber')"
    />
    <CheckboxType
      label="Je viens"
      :value="values.come"
      :change-callback="change"
    />
    <SubmitType label="Valider" :touched="touched.submit" :error="errors.submit" />
  </form>
</template>

<script>
import PresenceFormSchema from '../../yup/PresenceFormSchema'

export default {
  data () {
    return {
      values: {
        lastName: '',
        firstName: '',
        email: '',
        phoneNumber: '',
        come: false,
        adult: 0,
        child: 0,
        vegan: 0,
        message: ''
      },
      touched: {
        lastName: false,
        firstName: false,
        email: false,
        phoneNumber: false,
        adult: false,
        child: false,
        vegan: false,
        message: false,
        submit: false
      },
      errors: {
        lastName: null,
        firstName: null,
        email: null,
        phoneNumber: null,
        adult: null,
        child: null,
        vegan: null,
        message: null,
        submit: null
      }
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
      PresenceFormSchema
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
        PresenceFormSchema.validateSync(this.values)
        this.errors.submit = null
      } catch (e) {
        this.errors.submit = 'Je crois que t\'as oublié un truc, non ?'
        this.touched.submit = true
        return
      }

      try {
        await this.$axios.post('/api/contact', {
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

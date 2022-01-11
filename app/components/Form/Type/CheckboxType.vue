<template>
  <label class="flex items-center">
    <span class="mr-2">{{ label }}</span>
    <input
      type="checkbox"
      :checked="value"
      @change="change"
    >
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: Boolean,
      required: true
    },
    changeCallback: {
      type: Function,
      required: true
    }
  },
  methods: {
    change (e) {
      this.changeCallback(this.name, e.target.checked)
    }
  }
}
</script>

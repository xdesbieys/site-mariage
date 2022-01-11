<template>
  <div class="text-center">
    <button type="submit" class="mx-auto flex items-center bg-wood-400 text-wood-200 rounded-lg shadow-around px-2 py-1 transition duration-200">
      <ScrewSvg class="mx-2 w-2" />
      <span>{{ label }}</span>
      <ScrewSvg class="mx-2 w-2" />
    </button>
    <div class="text-red-700 text-base h-6 mt-1" :class="{'invisible': !isErrorVisible()}">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: false,
      default: null
    },
    touched: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    isErrorVisible () {
      return this.touched && this.error !== null
    }
  }
}
</script>

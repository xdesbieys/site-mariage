<template>
  <div>
    <textarea
      class="block bg-wood-100 placeholder-wood-300 shadow-around rounded-lg px-2 py-1 outline-none w-full"
      :rows="rows"
      :class="{'border-red-700': isErrorVisible()}"
      :value="value"
      :placeholder="placeholder"
      @focus="focusCallback"
      @change="change"
      @blur="blurCallback"
    />
    <div class="text-red-700 text-base h-6 mt-1" :class="{'invisible': !isErrorVisible()}">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rows: {
      type: Number,
      default: 5
    },
    value: {
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
    },
    placeholder: {
      type: String,
      required: true
    },
    focusCallback: {
      type: Function,
      required: true
    },
    changeCallback: {
      type: Function,
      required: true
    },
    blurCallback: {
      type: Function,
      required: true
    }
  },
  methods: {
    isErrorVisible () {
      return this.touched && this.error !== null
    },
    change (e) {
      this.changeCallback(e.target.value)
    }
  }
}
</script>

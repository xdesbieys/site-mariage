<template>
  <n-link :to="to" class="bg-wood-400 text-wood-200 rounded-lg shadow-around transition duration-200 px-3 py-1 flex justify-between items-center" @click.native="$store.commit('SHOW_MENU', false)">
    <ScrewSvg class="w-2" />
    <span>
      <slot />
    </span>
    <ScrewSvg class="w-2" />
  </n-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

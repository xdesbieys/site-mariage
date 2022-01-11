<template>
  <div class="container mx-auto flex-1 flex flex-col space-y-3">
    <Title v-if="title">
      {{ title }}
    </Title>
    <div class="bg-wood-200 rounded-lg shadow-around p-2 flex-1 flex flex-col">
      <div class="flex items-center justify-between mb-3 z-10 h-3">
        <div class="rounded-border rounded-border-br">
          <ScrewSvg class="w-3" />
        </div>
        <div class="divider flex-1 text-center mx-3 flex items-center justify-between">
          <PigneSvg class="w-4 fill-current" />
        </div>
        <div class="rounded-border rounded-border-bl">
          <ScrewSvg class="w-3" />
        </div>
      </div>
      <div class="flex-1 p-2 border-l-2 border-r-2 border-wood-400">
        <slot />
      </div>
      <div class="flex items-center justify-between mt-3 h-3">
        <div class="rounded-border rounded-border-tr">
          <ScrewSvg class="w-3" />
        </div>
        <div class="divider flex-1 text-center mx-3 flex items-center justify-between text-base">
          S & X
        </div>
        <div class="rounded-border rounded-border-tl">
          <ScrewSvg class="w-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.rounded-border {
  @apply .relative;
}

.rounded-border::after {
  @apply .border-wood-400 .w-6 .absolute;

  content: '';
  height: 19px;
}

.rounded-border-br::after,
.rounded-border-bl::after {
  @apply .border-b-2;

  bottom: -0.75rem;
}

.rounded-border-tr::after,
.rounded-border-tl::after {
  @apply .border-t-2;

  top: -0.75rem;
}

.rounded-border-br::after,
.rounded-border-tr::after {
  @apply .border-r-2;

  right: -0.75rem;
}

.rounded-border-bl::after,
.rounded-border-tl::after {
  @apply .border-l-2;

  left: -0.75rem;
}

.rounded-border-br::after {
  border-bottom-right-radius: 1rem;
}

.rounded-border-bl::after {
  border-bottom-left-radius: 1rem;
}

.rounded-border-tr::after {
  border-top-right-radius: 1rem;
}

.rounded-border-tl::after {
  border-top-left-radius: 1rem;
}

.divider::before,
.divider::after {
  @apply .w-5/12 .border-wood-400 .border-b-2;

  content: '';
}
</style>

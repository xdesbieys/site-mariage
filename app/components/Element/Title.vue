<template>
  <div class="relative">
    <div class="relative bg-wood-300 text-wood-500 px-2 py-1 rounded-lg shadow-around text-2xl flex items-center z-10">
      <h1 class="flex-1 text-center">
        <slot />
      </h1>
    </div>
    <div class="join join-left absolute h-20 w-5 bg-wood-400 shadow-around rounded-full" />
    <div class="join join-right absolute h-20 w-5 bg-wood-400 shadow-around rounded-full" />
  </div>
</template>

<style scoped>
.join {
  top: 0;
}

.join-left {
  left: 0.25rem;
}

.join-right {
  right: 0.25rem;
}
</style>

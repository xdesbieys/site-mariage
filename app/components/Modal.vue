<template>
  <div class="pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center" :class="{'opacity-0': !$store.state.modalShown, 'pointer-events-none':$store.state.modalShown }">
    <div class="absolute w-full h-full bg-gray-900 opacity-50" />
    <div />
  </div>
</template>

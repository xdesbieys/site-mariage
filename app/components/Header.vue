<template>
  <header class="container mx-auto p-3 flex items-center">
    <div class="w-7 p-1 bg-wood-400 rounded-lg shadow-around cursor-pointer cursor-pointer" @click="$store.commit('SHOW_MENU', true)">
      <BurgerSvg class="fill-current" />
    </div>
    <ScrewSvg class="mx-4 w-3" />
    <span class="flex-1 text-center text-2xl">
      <n-link to="/" @click.native="$store.commit('SHOW_MENU', false)">
        Sophie et Xavier
      </n-link>
    </span>
    <ScrewSvg class="mx-4 w-3" />
    <n-link to="/" class="w-7 p-1 bg-wood-400 rounded-lg shadow-around cursor-pointer cursor-pointer">
      <HouseSvg class="fill-current" />
    </n-link>
  </header>
</template>

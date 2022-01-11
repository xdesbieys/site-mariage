<template>
  <div :class="{'pointer-events-none': !$store.state.menuShown}">
    <div class="fixed top-0 left-0 w-full h-full bg-black transition-all duration-200 opacity-0 z-50" :class="{'opacity-75': $store.state.menuShown}" @click="$store.commit('SHOW_MENU', false)" />
    <section class="fixed top-0 left-0 w-0 z-50 transition-all duration-200 truncate h-full flex flex-col max-w-lg" :class="{'w-9/12': $store.state.menuShown}">
      <div class="bg-wood-500 text-wood-200 shadow-around p-3 flex items-center">
        <div class="w-7 p-1 bg-wood-400 rounded-lg shadow-around cursor-pointer" @click="$store.commit('SHOW_MENU', false)">
          <CrossSvg class="fill-current" />
        </div>
        <div class="flex-1">
          <PigneSvg class="h-9 fill-current mx-auto" />
        </div>
        <div class="w-7" />
      </div>
      <nav class="bg-wood-300 text-wood-500 shadow-around nav p-3 grid gap-8 h-full">
        <div>
          <div class="mb-2">
            L'avant Mariage
          </div>
          <ul class="grid gap-4">
            <li>
              <NavLink to="/journee">
                Le déroulé de la journée
              </NavLink>
            </li>
            <li>
              <NavLink to="/presence">
                Je confirme ma présence
              </NavLink>
            </li>
            <li>
              <NavLink to="/liste">
                Liste de mariage
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <div class="mb-2">
            L'après Mariage
          </div>
          <ul class="grid gap-4">
            <li>
              <NavLink to="/photos">
                Galerie Photos
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </div>
      </nav>
    </section>
  </div>
</template>

<style>
.nav {
  grid-template-rows: 1fr 1fr auto;
}
</style>

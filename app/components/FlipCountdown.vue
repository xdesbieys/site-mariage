<template>
  <div ref="tick" class="tick h-13">
    <div data-repeat="true" data-layout="horizontal fit" data-transform="preset(d, h, m, s) -> delay">
      <div class="tick-group">
        <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay">
          <span class="text-xl shadow-around" data-view="flip" />
        </div>
        <div data-key="label" data-view="text" class="tick-label text-center text-base" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    end: {
      type: Date,
      required: true
    }
  },
  mounted () {
    this.$tick.DOM.create(this.$refs.tick, {
      didInit: (tick) => {
        // uncomment to set labels to different language
        const locale = {
          YEAR_PLURAL: 'Ans',
          YEAR_SINGULAR: 'An',
          MONTH_PLURAL: 'Mois',
          MONTH_SINGULAR: 'Mois',
          WEEK_PLURAL: 'Semaines',
          WEEK_SINGULAR: 'Semaine',
          DAY_PLURAL: 'Jours',
          DAY_SINGULAR: 'Jour',
          HOUR_PLURAL: 'Heures',
          HOUR_SINGULAR: 'Heure',
          MINUTE_PLURAL: 'Minutes',
          MINUTE_SINGULAR: 'Minute',
          SECOND_PLURAL: 'Secondes',
          SECOND_SINGULAR: 'Seconde',
          MILLISECOND_PLURAL: 'Millisecondes',
          MILLISECOND_SINGULAR: 'Milliseconde'
        }

        for (const key in locale) {
          tick.setConstant(key, locale[key])
        }

        const counter = this.$tick.count.down(this.end)

        counter.onupdate = function (value) {
          tick.value = value
        }

        counter.onended = function () {
          // redirect, uncomment the next line
          // window.location = 'my-location.html'

          // hide counter, uncomment the next line
          // tick.root.style.display = 'none';

          // show message, uncomment the next line
          // document.querySelector('.tick-onended-message').style.display = '';
        }
      }
    })
  },
  destroyed () {
    this.$tick.DOM.destroy(this.$refs.tick)
  }
}
</script>

<style>
.tick {
  box-sizing: border-box;
  user-select: none;
  cursor: default;
  position: relative;
  z-index: 1;
  line-height: 1.4;
}

.tick * {
  box-sizing: inherit;
}

.tick [data-view] {
  max-width: 100%;
}

.tick span[data-view] {
  display: inline-block;
}

.tick-flip * {
  border-radius: inherit;
  white-space: pre;
  letter-spacing: inherit;
  text-indent: inherit;
}

.tick [data-layout~='pad'] {
  margin: -0.25em;
}

.tick [data-layout~='pad'] > * {
  margin: 0.25em;
}

.tick [data-layout~='horizontal'] {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tick [data-layout~='horizontal'][data-layout~='baseline'] {
  align-items: baseline;
}

.tick [data-layout~='horizontal'][data-layout~='center'] {
  justify-content: center;
}

.tick [data-layout~='horizontal'][data-layout~='right'] {
  justify-content: flex-end;
}

.tick [data-layout~='horizontal'][data-layout~='left'] {
  justify-content: flex-start;
}

.tick [data-layout~='overlay'] > * {
  margin: 0;
}

.tick [data-layout~='vertical'] > * + * {
  margin-top: 0.5em;
}

.tick [data-layout~='horizontal'][data-layout~='stretch'],
.tick [data-layout~='horizontal'][data-layout~='fill'] {
  align-content: stretch;
  flex-wrap: nowrap;
}

.tick [data-layout~='horizontal'][data-layout~='stretch'] > *,
.tick [data-layout~='horizontal'][data-layout~='fill'] > * {
  flex: 1 0 0;
  width: 100%;
}

.tick [data-layout~='horizontal'][data-layout~='multi-line'] {
  flex-wrap: wrap;
}

.tick [data-layout~='horizontal'][data-layout~='fit'] {
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  white-space: nowrap;
  justify-content: space-around;
}

.tick [data-layout~='vertical'] {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tick [data-layout~='vertical'][data-layout~='top'] {
  justify-content: flex-start;
}

.tick [data-layout~='vertical'][data-layout~='bottom'] {
  justify-content: flex-end;
  min-height: 100%;
}

.tick [data-layout~='vertical'][data-layout~='middle'] {
  justify-content: center;
  min-height: 100%;
}

.tick [data-layout~='vertical'][data-layout~='left'] {
  align-items: flex-start;
}

.tick [data-layout~='vertical'][data-layout~='right'] {
  align-items: flex-end;
}

.tick [data-layout~='vertical'][data-layout~='center'] {
  text-align: center;
}

.tick [data-layout~='vertical'][data-layout~='stretch'],
.tick [data-layout~='vertical'][data-layout~='fill'] {
  align-items: stretch;
  min-height: 100%;
}

.tick [data-layout~='vertical'][data-layout~='stretch'] > *,
.tick [data-layout~='vertical'][data-layout~='fill'] > * {
  flex: 1 0 0;
}

.tick [data-layout~='overlay'] {
  position: relative;
}

.tick [data-layout~='overlay'][data-layout~='center'] {
  text-align: center;
}

.tick [data-layout~='overlay'][data-layout~='left'] {
  text-align: left;
}

.tick [data-layout~='overlay'][data-layout~='right'] {
  text-align: right;
}

.tick [data-layout~='overlay'] > [data-overlay='stretch'],
.tick [data-layout~='overlay'] > [data-overlay='fill'] {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.tick [data-layout~='overlay'] > [data-overlay='center'] {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

/**
 * Layout
 */
.tick-flip {
  position: relative;
  text-align: center;
  margin-left: 0.0625em;
  margin-right: 0.0625em;
  min-width: 1.125em;
  border-radius: 0.125em;
  letter-spacing: 0.25em;
  text-indent: 0.25em;
}

.tick-flip-front {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.tick-flip-back {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.tick-flip-spacer {
  display: block;
  visibility: hidden;
}

.tick-flip-shadow {
  position: absolute;
  left: 1px;
  right: 1px;
  top: 1px;
  bottom: 1px;
  color: transparent !important;
  background: transparent !important;
  box-shadow: 0 0.125em 0.3125em rgba(0, 0, 0, 0.25), 0 0.02125em 0.06125em rgba(0, 0, 0, 0.25);
}

.tick-flip-shadow-top {
  bottom: calc(50% - 1px);
}

.tick-flip-shadow-bottom {
  top: calc(50% + 1px);
}

.tick-flip-card-shadow {
  position: absolute;
  left: 0.15em;
  right: 0.15em;
  bottom: 0.125em;
  height: 0.5em;
  background-color: transparent;
  border-radius: 0;
  opacity: 0;
  transform-origin: 0 100%;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.5), 0 0.125em 0.5em rgba(0, 0, 0, 0.75);
  z-index: 0;
}

/**
 * Card
 */
.tick-flip-card {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  perspective: 4em;
}

.tick-flip-panel-front,
.tick-flip-panel-back {
  position: absolute;
  left: 0;
  width: 100%;
  height: 51%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.tick-flip-panel-front-text,
.tick-flip-panel-back-text {
  position: absolute;
  left: -1px;
  top: 0;
  right: -1px;
  height: 100%;
  overflow: hidden;
}

.tick-flip-panel-text-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 100%;
}

.tick-flip-panel-back-text .tick-flip-panel-text-wrapper {
  height: 200%;
  top: -100%;
}

.tick-flip-panel-front {
  transform-origin: center bottom;
  top: 0;
  z-index: 2;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.05);
}

.tick-flip-panel-back {
  transform-origin: center top;
  top: 50%;
  z-index: 1;
  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.1);
}

.tick-flip-panel-back::after {
  z-index: 1;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3) 1px, rgba(0, 0, 0, 0.15) 1px, transparent 30%);
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 1px, rgba(0, 0, 0, 0.15) 1px, transparent 30%);
}

.tick-flip-panel-back-shadow {
  z-index: 2;
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
}

.tick-flip-panel-back-highlight {
  z-index: 3;
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.3));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.3));
}

.tick-flip-panel-back-shadow,
.tick-flip-panel-back-highlight {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.tick-flip-panel-front-shadow,
.tick-flip-panel-back-shadow,
.tick-flip-panel-back-highlight {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
}

.tick-flip-panel-front-shadow {
  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
}

.tick [data-style*='shadow:inner'],
.tick [data-style*='shadow:inner'] .tick-flip-card-shadow {
  box-shadow: none;
}

.tick [data-style*='shadow:none'] .tick-flip-panel-front,
.tick [data-style*='shadow:none'] .tick-flip-panel-back,
.tick [data-style*='shadow:none'] .tick-flip-shadow,
.tick [data-style*='shadow:none'] .tick-flip-card-shadow {
  box-shadow: none;
}

.tick [data-style*='shadow:none'] .tick-flip-back::after,
.tick [data-style*='shadow:none'] .tick-flip-panel-front-shadow,
.tick [data-style*='shadow:none'] .tick-flip-panel-back-shadow,
.tick [data-style*='shadow:none'] .tick-flip-panel-back-text::after {
  background-image: none;
}

.tick [data-style*='rounded:none'] {
  border-radius: 0;
}

.tick [data-style*='rounded:panels'] .tick-flip-shadow-bottom,
.tick [data-style*='rounded:panels'] .tick-flip-front {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.tick [data-style*='rounded:panels'] .tick-flip-shadow-top,
.tick [data-style*='rounded:panels'] .tick-flip-panel-back::after,
.tick [data-style*='rounded:panels'] .tick-flip-back {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.tick-flip-panel {
  @apply .bg-wood-400 .bg-cover .text-wood-200;
}
</style>

<template>
    <div
    class="
      relative
      bg-black
      pt-16
      pb-20
      px-4
      sm:px-6
      lg:pt-24 lg:pb-28 lg:px-8
    "
  >
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center py-20">
        <h2
          class="
            fadeOut
            scrolldown
            text-4xl
            tracking-tight
            font-extrabold
            text-white
            sm:text-7xl
          "
        >
          Welcome to Vue Astro
        </h2>
        <!-- <h2
          class="
            grow
            fadeIn
            text-4xl
            tracking-tight
            font-extrabold
            text-white
            sm:text-7xl
          "
        >
          What do the stars have for you today?
        </h2>
        <p class="downarrows pt-32 text-lg font-semibold text-white">
          scroll down
        </p> -->
        <p class="downarrows pt-12 text-xl font-semibold text-white">↓</p>
        <p class="downarrows pt-12 text-xl font-semibold text-white">☆</p>
          <select
            id="sign"
            v-model="selected"
            name="sign"
            class="mt-1 block w-full py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option disabled value="">Please select your sign</option>
            <option>Aries</option>
            <option>Taurus</option>
            <option>Gemini</option>
            <option>Cancer</option>
            <option>Leo</option>
            <option>Virgo</option>
            <option>Libra</option>
            <option>Scorpio</option>
            <option>Sagittarius</option>
            <option>Capricorn</option>
            <option>Aquarius</option>
            <option>Pisces</option>
          </select>

        <p class="fadeIn pt-12 text-xl font-semibold text-white">Your sign is: {{ this.sign }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import lax from 'lax.js'
import { mapState } from 'vuex'

export default {
  // mounted() {
  //   lax.init()
  //   lax.addDriver('scrollY', function () {
  //     return window.scrollY
  //   })
  //   lax.addElements('.fadeIn', {
  //     scrollY: {
  //       opacity: [
  //         [0, 100],
  //         [0, 1],
  //       ],
  //     },
  //   })
  //   lax.addElements('.scrolldown', {
  //     scrollY: {
  //       'letter-spacing': [
  //         [0, 'screenHeight*0.75'],
  //         [0, 150],
  //         {
  //           cssUnit: 'px',
  //         },
  //       ],
  //       opacity: [
  //         [0, 100],
  //         [1, 0],
  //       ],
  //       translateX: [
  //         [0, 'screenHeight'],
  //         [0, 80],
  //       ],
  //     },
  //   })
  //   lax.addElements('.fadeOut', {
  //     scrollY: {
  //       opacity: [
  //         [0, 100],
  //         [1, 0],
  //       ],
  //     },
  //   })
  //   lax.addElements('.letter-x', {
  //     scrollY: {
  //       translateY: [
  //         [-400, 0],
  //         [100, 0],
  //       ],
  //       translateX: [
  //         [220, 'screenHeight'],
  //         [0, 400],
  //       ],
  //       opacity: [
  //         [0, 100],
  //         [0, 1],
  //       ],
  //     },
  //   })
  //   lax.addElements('.letter-a', {
  //     scrollY: {
  //       translateY: [
  //         [-400, 0],
  //         [200, 0],
  //       ],
  //       translateX: [
  //         [220, 'screenHeight'],
  //         [0, -400],
  //       ],
  //       opacity: [
  //         [0, 100],
  //         [0, 1],
  //       ],
  //     },
  //   })
  //   lax.addElements('.downarrows', {
  //     scrollY: {
  //       translateY: [
  //         [0, 75],
  //         [0, 200],
  //       ],
  //       opacity: [
  //         [0, 100],
  //         [1, 0],
  //       ],
  //     },
  //   })
  //   lax.addElements('.grow', {
  //     scrollY: {
  //       scale: [
  //         [30, 100],
  //         [0.3, 1],
  //       ],
  //     },
  //   })
  // },
  // beforeUnmount() {
  //   lax.removeElements(
  //     '.fadeIn',
  //     '.grow',
  //     '.downarrows',
  //     '.letter-a',
  //     '.letter-x',
  //     '.fadeOut',
  //     '.scrolldown'
  //   )
  // },
  data() {
    return {
      selected: ''
    }
  },
  watch: {
    selected() {
      this.$store.commit('app/SET_SIGN', this.selected)
    }
  },
  computed: {
    ...mapState(
      'app',
      ['sign',
      'today']
    )
  }
}
</script>

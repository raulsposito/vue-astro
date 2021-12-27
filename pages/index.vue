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
        <!-- <p class="downarrows pt-12 text-xl font-semibold text-white">↓</p>
        <p class="downarrows pt-12 text-xl font-semibold text-white">☆</p> -->
          <select
            id="sign"
            v-model="selected"
            name="sign"
            class="mt-12 block w-full py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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

        <button
          type="button"
          v-on:click="getToday"
          class="mt-12 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          ☆ Get Today's Horoscope ☆
        </button>

        <p v-if="this.isReading" class="fadeIn pt-12 text-xl font-semibold text-white">{{ this.sign }} Date Ranges: {{ this.today.date_range }}</p>
        <p v-if="this.isReading" class="fadeIn pt-12 text-xl font-semibold text-white">Today's Date: {{ this.today.current_date }}</p>
        <p v-if="this.isReading" class="fadeIn pt-12 text-xl font-semibold text-white">Today's Mood for {{ this.sign }}: {{ this.today.mood }}</p>
        <p v-if="this.isReading" class="fadeIn pt-12 text-xl font-semibold text-white">Today's Color for {{ this.sign }}: {{ this.today.color }}</p>
        <p v-if="this.isReading" class="fadeIn pt-12 text-xl font-semibold text-white">Today's Lucky Number for {{ this.sign }}: {{ this.today.lucky_number }}</p>
        <p v-if="this.isReading" class="fadeIn pt-12 text-xl font-semibold text-white">Today's Lucky Time: {{ this.today.lucky_time }}</p>
        <p v-if="this.isReading" class="fadeIn pt-12 text-xl font-semibold text-white">Today's Sign Compatibility: {{ this.today.compatibility }}</p>
        <p v-if="this.isReading" class="fadeIn pt-12 text-xl font-semibold text-white">Today's Reading for {{ this.sign }}: {{ this.today.description }}</p>
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
      selected: '',
      isReading: false
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
  },
  methods: {
    getToday() {
      console.log('Im clicked!')
      this.$store.dispatch('app/GET_TODAY')
      this.isReading = true
    }
  }
}
</script>

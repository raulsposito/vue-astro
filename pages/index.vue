<template>
  <div
    class="
      video
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
            text-4xl
            tracking-tight
            font-extrabold
            text-white
            sm:text-7xl
          "
        >
          Welcome to Vue Astro
        </h2>
          <select
            id="sign"
            v-if="!this.isReading"
            v-model="selected"
            name="sign"
            class="mt-12 block w-full py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
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

        <p v-if="!this.isReading" class="pt-12 text-xl font-semibold text-white">Your sign is: {{ this.sign }}</p>

        <button
          type="button"
          v-if="!this.isReading"
          v-on:click="getToday"
          class="mt-12 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          ☆ Get Today's Horoscope ☆
        </button>

        <div v-if="this.isReading" >
          <p class="pt-12 text-xl font-semibold text-white">{{ this.sign }} Date Ranges: {{ this.today.date_range }}</p>
          <p class="pt-12 text-xl font-semibold text-white">Today's Date: {{ this.today.current_date }}</p>
          <p class="pt-12 text-xl font-semibold text-white">Today's Mood for {{ this.sign }}: {{ this.today.mood }}</p>
          <p class="pt-12 text-xl font-semibold text-white">Today's Color for {{ this.sign }}: {{ this.today.color }}</p>
          <p class="pt-12 text-xl font-semibold text-white">Today's Lucky Number for {{ this.sign }}: {{ this.today.lucky_number }}</p>
          <p class="pt-12 text-xl font-semibold text-white">Today's Lucky Time: {{ this.today.lucky_time }}</p>
          <p class="pt-12 text-xl font-semibold text-white">Today's Sign Compatibility: {{ this.today.compatibility }}</p>
          <p class="pt-12 text-xl font-semibold text-white">Today's Reading for {{ this.sign }}: {{ this.today.description }}</p>
        </div>

        <button
          type="button"
          v-if="this.isReading"
          v-on:click="reset"
          class="mt-12 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          ☽ ☆ Ask Another Sign ☆ ☾
        </button>

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: "298201286" },
  globalObjectName: 'vue_astro',
})

export default {
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
      this.$store.dispatch('app/GET_TODAY')
      this.isReading = true
      this.$VueGtag.event('latest-horoscope-click', {
        'event_category': 'Vue Astro',
        'event_label': 'Latest Horoscope Button Click',
        'value': 1
      })
    },
    reset() {
      this.isReading = false
    }
  }
}
</script>

<style>
.video {
  /* background-image: url(https://media3.giphy.com/media/eHdZZgmLheaqRT6kVX/giphy.gif?cid=ecf05e47o5hrabzauwf67axvz6lloxm7281jjlbvybgqaifm&rid=giphy.gif&ct=g); */
  background-image: url(https://media4.giphy.com/media/hXv4LngASTk8o/giphy.gif?cid=790b7611b5d57084fdba408839d3085fe40f0810b93ba17f&rid=giphy.gif&ct=g);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
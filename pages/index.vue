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
        <h2
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
        </p>
        <p class="downarrows pt-12 text-xl font-semibold text-white">↓</p>
        <p class="downarrows pt-12 text-xl font-semibold text-white">☆</p>
          <select
            id="sign"
            v-model="sign"
            name="sign"
            class="mt-1 block w-full py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option v-for="s in signs" :key="s.id" :value="s.id">
              {{ s.name }}
            </option>
          </select>

        <p class="fadeIn pt-12 text-xl font-semibold text-white">The end</p>
      </div>
    </div>
  </div>
</template>

<script>
import lax from 'lax.js'

export default {
  mounted() {
    lax.init()
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })
    lax.addElements('.fadeIn', {
      scrollY: {
        opacity: [
          [0, 100],
          [0, 1],
        ],
      },
    })
    lax.addElements('.scrolldown', {
      scrollY: {
        'letter-spacing': [
          [0, 'screenHeight*0.75'],
          [0, 150],
          {
            cssUnit: 'px',
          },
        ],
        opacity: [
          [0, 100],
          [1, 0],
        ],
        translateX: [
          [0, 'screenHeight'],
          [0, 80],
        ],
      },
    })
    lax.addElements('.fadeOut', {
      scrollY: {
        opacity: [
          [0, 100],
          [1, 0],
        ],
      },
    })
    lax.addElements('.letter-x', {
      scrollY: {
        translateY: [
          [-400, 0],
          [100, 0],
        ],
        translateX: [
          [220, 'screenHeight'],
          [0, 400],
        ],
        opacity: [
          [0, 100],
          [0, 1],
        ],
      },
    })
    lax.addElements('.letter-a', {
      scrollY: {
        translateY: [
          [-400, 0],
          [200, 0],
        ],
        translateX: [
          [220, 'screenHeight'],
          [0, -400],
        ],
        opacity: [
          [0, 100],
          [0, 1],
        ],
      },
    })
    lax.addElements('.downarrows', {
      scrollY: {
        translateY: [
          [0, 75],
          [0, 200],
        ],
        opacity: [
          [0, 100],
          [1, 0],
        ],
      },
    })
    lax.addElements('.grow', {
      scrollY: {
        scale: [
          [30, 100],
          [0.3, 1],
        ],
      },
    })
  },
  beforeUnmount() {
    lax.removeElements(
      '.fadeIn',
      '.grow',
      '.downarrows',
      '.letter-a',
      '.letter-x',
      '.fadeOut',
      '.scrolldown'
    )
  },
  data() {
    return {
      signs: [
        {
          id: 0,
          name: 'Aries'
        },
        {
          id: 1,
          name: 'Taurus'
        },
        {
          id: 2,
          name: 'Gemini'
        },
        {
          id: 3,
          name: 'Cancer'
        },
        {
          id: 4,
          name: 'Leo'
        },
        {
          id: 5,
          name: 'Virgo'
        },
        {
          id: 6,
          name: 'Libra'
        },
        {
          id: 7,
          name: 'Scorpio'
        },
        {
          id: 8,
          name: 'Sagittarius'
        },
        {
          id: 9,
          name: 'Capricorn'
        },
        {
          id: 10,
          name: 'Aquarius'
        },
        {
          id: 11,
          name: 'Pisces'
        }
      ]
    }
  }
}
</script>

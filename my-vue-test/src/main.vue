<template lang="html">
  <div :class="[isGrey ? style.isGrey : '', style.content]" @click="toggle">
    {{text}}
  </div>
</template>

<script>
import style from './main.css'
export default {
  data: () => {
    return {
      isGrey: false,
      text: 'my very first vue project',
      style: style
    }
  },
  methods: {
    toggle () {
      this.isGrey = !this.isGrey
    }
  }
}
</script>

<style lang="css">
  *{
    box-sizing: border-box;
  }
</style>

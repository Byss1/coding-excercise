<template lang="html">
  <div :class="classObject" @click="toggle">
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
  computed: {
    classObject () {
      let classObj = {}
      classObj[style.content] = true
      classObj[style.isGrey] = this.isGrey
      return classObj
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

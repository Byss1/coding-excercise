<template lang="html">
  <div class="content" :class="{isGrey: isGrey}" @click="toggle">
    {{text}}
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isGrey: false,
      text: 'my very first vue project'
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
  .content{
    width: 80%;
    margin-top: 50px;
    text-align: center;
    vertical-align: middle;
    font-size: 30px;
    font-family: "Microsoft Yahei" monospace;
  }
  .isGrey{
    background-color: #eee;
  }
</style>

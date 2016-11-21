<template lang="html">
  <div class="text">
    <textarea placeholder="按 Ctrl + Enter 发送" v-model="content" @keyup="onKeyup"></textarea>
  </div>
</template>

<script>
export default {
  data: () => ({
    content: ''
  }),
  methods: {
    onKeyup (e) {
      if (e.ctrlKey && e.key === 'Enter' && this.content.length) {
        this.$store.dispatch('sendMessage', this.content)
        this.content = ''
      }
    }
  }
}
</script>

<style lang="css" scoped>
.text {
  height: 160px;
  border-top: solid 1px #ddd;
}
.text textarea {
  padding: 10px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-family: "Micrsofot Yahei";
  resize: none;
}
</style>

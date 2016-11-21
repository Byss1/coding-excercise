<template>
  <div id="app">
    <div class="sidebar">
      <card></card>
      <list></list>
    </div>
    <div class="main">
      <message></message>
      <text-input></text-input>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Card from './components/card'
import List from './components/list'
import Message from './components/message'
import TextInput from './components/text'

export default {
  name: 'app',
  components: {Card, List, Message, TextInput},
  methods: mapActions(['initData']),
  created () {
    this.initData()
  }
}
</script>

<style lang="css" scoped>
#app {
  margin: 20px auto;
  width: 800px;
  height: 600px;
  overflow: hidden;
  border-radius: 3px;
}
#app .sidebar,
#app .main {
  height: 100%;
}
#app .sidebar {
  float: left;
  width: 200px;
  color: #f4f4f4;
  background-color: #2e3238;
}
#app .main {
  position: relative;
  overflow: hidden;
  background-color: #eee;
}
#app .text {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
#app .message {
  height: calc(100% - 160px);
}
</style>

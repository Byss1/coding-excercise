<template lang="html">
  <div class="message" @resize="scrollBottom">
    <ul v-if="session">
      <li v-for="message in session.messages">
        <p class="time">
          <span>{{message.date | time}}</span>
        </p>
        <div class="main" :class="{self: message.self}">
          <img :src="message.self ? user.img : session.user.img" class="avatar" width="30" height="30" />
          <div class="text">
            {{message.content}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: mapState({
    user: ({user}) => (user),
    session: ({sessions, currentSessionId}) => sessions.find(session => session.id === currentSessionId)
  }),
  filters: {
    // 将日期过滤为 hour:minutes
    time (date) {
      if (typeof date === 'string') {
        date = new Date(date)
      }
      return date.getHours() + ':' + date.getMinutes()
    }
  },
  methods: {
    scrollBottom () {
      alert(1)
      if (this.session.messages.length) {
        this.$el.scrollTop = this.$el.scrollHeight - this.$el.clientHeight
      }
    }
  }
  // directives: {
  //   'scroll-bottom' () {
  //     this.$nextTick(() => {
  //       this.$el.scrollTop = this.$el.scrollHeight - this.$el.clientHeight
  //     })
  //   }
  // }
}
</script>

<style lang="css" scoped>
.message {
  padding: 10px 15px;
  overflow-y: scroll;
}
.message li {
  margin-bottom: 15px;
}
.message .time {
  margin: 7px 0;
  text-align: center;
}
.message .time > span {
  display: inline-block;
  padding: 0 18px;
  font-size: 12px;
  color: #fff;
  border-radius: 2px;
  background-color: #dcdcdc;
}
.message .avatar {
  float: left;
  margin: 0 10px 0 0;
  border-radius: 3px;
}
.message .text {
  display: inline-block;
  position: relative;
  padding: 0 10px;
  max-width: calc(100% - 40px);
  min-height: 30px;
  line-height: 2.5;
  font-size: 12px;
  text-align: left;
  word-break: break-all;
  background-color: #fafafa;
  border-radius: 4px;
}
.message .text:before {
  content: " ";
  position: absolute;
  top: 9px;
  right: 100%;
  border: 6px solid transparent;
  border-right-color: #fafafa;
}
.message .self {
  text-align: right;
}
.message .self .avatar {
  float: right;
  margin: 0 0 0 10px;
}
.message .self .text {
  background-color: #b2e281;
}
.message .self .text:before {
  right: inherit;
  left: 100%;
  border-right-color: transparent;
  border-left-color: #b2e281;
}
</style>

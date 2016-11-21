<template lang="html">
  <div class="list">
    <ul>
      <li v-for="session in sessions" :class="{active: session.id === currentId}" @click="selectSession(session.id)">
        <img class="avatar" width="30" height="30" :src="session.user.img" :alt="session.user.name" />
        <p class="name">
          {{session.user.name}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  computed: mapState({
    sessions ({sessions, filterKey}) {
      let results = sessions.filter(session => session.user.name.includes(filterKey))
      return results
    },
    currentId: ({currentSessionId}) => currentSessionId
  }),
  methods: mapActions(['selectSession'])
}
</script>

<style lang="css" scoped>
.list li {
  padding: 12px 15px;
  border-bottom: 1px solid #292C33;
  cursor: pointer;
  transition: background-color 0.1s;
}
.list li:hover {
  background-color: rgba(255, 255, 255, 0.03);
}
.list li.active {
  background-color: rgba(255, 255, 255, 0.1);
}
.list .avatar,
.list .name {
  vertical-align: middle;
}
.list .avatar {
  border-radius: 2px;
}
.list .name {
  display: inline-block;
  margin: 0 0 0 15px;
}
</style>

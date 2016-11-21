import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
// 引入需要的mutaition-types
import {INIT_DATA, SEND_MESSAGE, SELECT_SESSION, SET_FILTER_KEY} from './mutation-types.js'
Vue.use(Vuex)

const now = new Date().toString()
const store = new Vuex.Store({
  state: {
    // 当前用户
    user: {
      name: 'zvit',
      img: 'static/images/avatar.jpg'
    },

    sessions: [
      {
        id: 1,
        user: {
          name: '好友1',
          img: 'static/images/2.png'
        },
        messages: [
          {
            content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
            date: now
          },
          {
            content: '项目地址: https://github.com/coffcer/vue-chat',
            date: now
          }
        ]
      },
      {
        id: 2,
        user: {
          name: '好友2',
          img: 'static/images/3.jpg'
        },
        messages: []
      }
    ],

    // 当前选中的对话
    currentSessionId: 1,

    // 过滤出只包含这个key的对话
    filterKey: ''
  },

  mutations: {
    [INIT_DATA] (state) {
      let data = window.localStorage.getItem('vue-chat-session')
      if (data) {
        state.sessions = JSON.parse(data)
      }
    },
    [SEND_MESSAGE] (state, content) {
      let session = state.sessions.find(item => item.id === state.currentSessionId)
      session.messages.push({
        content,
        date: new Date().toString(),
        self: true
      })
    },
    [SELECT_SESSION] (state, id) {
      state.currentSessionId = id
    },
    [SET_FILTER_KEY] (state, value) {
      state.filterKey = value
    }
  },

  actions: {
    initData ({commit}) {
      commit(INIT_DATA)
    },
    sendMessage ({commit}, content) {
      commit(SEND_MESSAGE, content)
    },
    selectSession ({commit}, id) {
      commit(SELECT_SESSION, id)
    },
    search ({commit}, value) {
      commit(SET_FILTER_KEY, value)
    }
  },

  plugins: [createLogger()]
})

store.watch(
  (state) => state.sessions,
  (val) => {
    window.localStorage.setItem('vue-chat-session', JSON.stringify(val))
  },
  {
    deep: true
  }
)
export default store

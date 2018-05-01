<template>
  <div>
    <list class="list" @loadmore="fetch" loadmoreoffset="10" :style="isClk?{display:'flex',flex:'1'}:{opacity:'0',width:'0px',height:'0px'}">
      <cell class="cell" v-for="(item,index) in Result" :key="index">
        <div class="panel"  v-for="(itm,idx) in item.data" :key="idx">
          <div @click="jump(itm.url)" :id="itm.url">
            <div v-if="itm.thumbnails[2]">
              <three-images :data="itm"></three-images>
            </div>
            <div v-else>
              <right-image-left-text :data="itm"></right-image-left-text>
            </div>
            <card-footer class="footer" :source="itm.source_name" :data="itm"/>
          </div>
        </div>
      </cell>
    </list>
    <web-page :A="isClk" :src="url"></web-page>
  </div>
</template>
<script>

import CardMixin from './mixins/card-mixin'
import RightImageLeftText from './components/card/right-image-left-text.vue'
import ThreeImages from './components/card/three-images.vue'
import WebPage from './components/webpage.vue'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const stream = weex.requireModule('stream')
let page = 1
let GET_URL = `http://napi.uc.cn/3/classes/Article/lists/dingc3d6a76324672fb535c2f4657eb6378f?_app_id=51f550dbbe2c44c6a371e363e64cfcb0&_page=${page}&_size=6&_fetch=1`
const store = new Vuex.Store({
  state: {
    Result: []
  }
})
export default {
  mixins: [CardMixin],
  props: {
    A: Boolean,
    src: String
  },
  components: {
    ThreeImages, RightImageLeftText, WebPage
  },
  data () {
    return {
      // Result: [],
      isClk: true,
      url: ''
    }
  },
  computed: {
    Result: function () {
      // console.log(this.$store.state.Result)
      // console.log(store.state.Result)
      // return this.$store.state.Result
      return store.state.Result
    }
  },
  methods: {
    jump (e) {
      this.url = e
      this.isClk = false
    },
    stream (me, GET_URL) {
      return new Promise(resolve => {
        stream.fetch(
          {
            method: 'GET',
            url: GET_URL,
            type: 'json'
          },
          (ret) => {
            if (!ret.ok) {
              me.getResult = 'request failed'
            } else {
              me.getResult = JSON.stringify(ret.data)
              me.getResult = JSON.parse(me.getResult)
              // me.Result.push(me.getResult)
              // this.$store.commit('increment', me.getResult)
              store.state.Result.push(me.getResult)
              console.log('----')
              console.log(store.state.Result)
            }
          },
          (response) => {
            me.getResult = 'bytes received:' + response.length
          }
        )
      })
    },
    fetch (event) {
      let me = this
      page += 1
      GET_URL = `http://napi.uc.cn/3/classes/Article/lists/dingc3d6a76324672fb535c2f4657eb6378f?_app_id=51f550dbbe2c44c6a371e363e64cfcb0&_page=${page}&_size=6&_fetch=1`
      this.stream(me, GET_URL)
    }
  },
  created () {
    let me = this
    this.stream(me, GET_URL)
  }
}
</script>
<style scoped>
.panel {
  display: flex;
  width: 648px;
  height: auto;
  margin-left: 48px;
  margin-top: 15px;
  margin-bottom: 25px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom-width: 1px;
  border-style: solid;
  border-color:#ededed;
}
</style>
